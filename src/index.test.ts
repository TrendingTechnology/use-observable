import { useObservable } from "./";
import { renderHook, act } from "@testing-library/react-hooks";
import { interval, BehaviorSubject } from "rxjs";

// mock timer using jest
jest.useFakeTimers();

describe("useObservable", () => {
  it("should support BehaviorSubject", () => {
    const query = new BehaviorSubject("init");
    const { result } = renderHook(() => useObservable(query));
    let [next] = result.current;
    expect(next).toBe("init");
    act(() => {
      query.next("2");
    });

    [next] = result.current;
    expect(next).toBe("2");
  });

  it("updates every second", () => {
    const { result } = renderHook(() => useObservable(interval(1000), 0));
    let [next] = result.current;

    expect(next).toBe(0);

    // // Fast-forward 1sec
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    [next] = result.current;
    // // Check after total 1 sec
    expect(next).toBe(0);

    // // Fast-forward 1 more sec
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    [next] = result.current;
    // Check after total 2 sec
    expect(next).toBe(1);
  });
});
