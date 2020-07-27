import { Observable, Subscription } from "rxjs";
import * as React from "react";

export function useObservable<T, E>(
  source$: Observable<T>,
  initialValue?: T | undefined
): [T, E | undefined, boolean] {
  const sourceRef$ = React.useRef<Observable<T>>(source$);
  const isBehaviorSubject = initialValue === undefined;

  const [error, setError] = React.useState<E | undefined>();
  const [completed, setComplete] = React.useState<boolean>(false);
  const [next, setValue] = React.useState<T>(() => {
    if (isBehaviorSubject) {
      let firstValue: T | undefined = undefined;

      let subscription: Subscription | null = sourceRef$.current.subscribe(
        (v) => {
          firstValue = v;
        }
      );

      subscription.unsubscribe();
      subscription = null;

      return firstValue! as T;
    }

    return initialValue!;
  });

  React.useEffect(() => {
    let subscription: Subscription;

    if (isBehaviorSubject) {
      let firstEmission = true;
      subscription = sourceRef$.current.subscribe({
        next(v) {
          if (!firstEmission) {
            setValue(v);
          }
          firstEmission = false;
        },
        error: setError,
        complete() {
          setComplete(true);
        },
      });
    } else {
      subscription = sourceRef$.current.subscribe({
        next: setValue,
        error: setError,
        complete() {
          setComplete(true);
        },
      });
    }

    return () => {
      subscription.unsubscribe();
    };
  }, [sourceRef$.current]);

  return [next, error, completed];
}
