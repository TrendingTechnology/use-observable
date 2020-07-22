import { Observable, Subscription } from 'rxjs';
import { useRef, useState, useEffect } from 'react';

export function useObservable<T, E>(source$: Observable<T>, initialValue?: T | undefined): [T, E | undefined, boolean] {
  const sourceRef$ = useRef<Observable<T>>(source$);
  const isBehaviorSubject = initialValue === undefined;
  
  const [error, setError] = useState<E | undefined>();
  const [completed, setComplete] = useState<boolean>(false);
  const [next, setValue] = useState<T>(() => {
    if(isBehaviorSubject) {
      let firstValue: T | undefined = undefined;

      let subscription: Subscription | null = sourceRef$.current.subscribe(v => {
        firstValue = v;
      });

      subscription.unsubscribe();
      subscription = null;

      return firstValue! as T;
    } 

    return initialValue!;
  });

  useEffect(() => {
    let subscription: Subscription;

    if(isBehaviorSubject) {
      let firstEmission = true;
      subscription = sourceRef$.current.subscribe({
        next(v) {
            if(!firstEmission) {
              setValue(v);
            }
            firstEmission = false;
        },
         error: setError,
        complete() {
          setComplete(true)
        }
      });
    } else {
      subscription = sourceRef$.current.subscribe({
        next: setValue,
        error: setError,
        complete() {
          setComplete(true)
        }
      });
    }

    return () => {
      subscription.unsubscribe();
    }
  }, [sourceRef$.current]);

  return [next, error, completed];
};