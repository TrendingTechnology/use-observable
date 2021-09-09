import { Observable, Subscription } from "rxjs";
import * as React from "react";

export function useObservable<T, E>(
  source$: Observable<T>,
  initialValue?: T | undefined
): [T, E | undefined, boolean] {
  const sourceRef$ = React.useRef<Observable<T>>(source$);
  const emitsInitialSyncValue = initialValue === undefined;

  const [error, setError] = React.useState<E | undefined>();
  const [completed, setComplete] = React.useState<boolean>(false);
  const [next, setValue] = React.useState<T>(() => {
    if (emitsInitialSyncValue) {
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

    const base = {
      error: setError,
      complete() {
        setComplete(true);
      },
    };
    if (emitsInitialSyncValue) {
      let firstEmission = true;
      subscription = sourceRef$.current.subscribe({
        next(v) {
          if (!firstEmission) {
            setValue(v);
            return;
          }
          firstEmission = false;
        },
        ...base,
      });
    } else {
      subscription = sourceRef$.current.subscribe({
        next: setValue,
        ...base,
      });
    }

    return () => {
      subscription.unsubscribe();
    };
  }, [sourceRef$.current]);

  return [next, error, completed];
}
