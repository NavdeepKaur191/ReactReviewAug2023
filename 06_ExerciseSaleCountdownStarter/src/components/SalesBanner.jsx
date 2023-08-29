// The code should not use any package that has countdown timer created for them.
import { useEffect, useState } from "react";
import {
  isBefore,
  add,
  differenceInCalendarDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { TagIcon } from "@heroicons/react/outline";

function SalesBanner() {
  // This date should be whatever day the student creates the component.
  const saleEndDate = add(new Date("August 29, 2023 00:00:00"), {
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //Student should use at least one state variable.
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const saleIsRunning = isBefore(currentDate, saleEndDate);
  const [removeWhenSaleIsComplete, setRemoveWhenSaleIsComplete] = useState(false);

  // The code should use at least one effect hook
  useEffect(() => {
  
        setRemoveWhenSaleIsComplete(false);
    // setInterval is the best API to use but there are ways students can use setTimeout to achieve the same goal.
    let ticker = setInterval(() => {
      console.log("tick");
      setCurrentDate(new Date());

      if (!isBefore(currentDate, saleEndDate)) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setRemoveWhenSaleIsComplete(true);
        clearInterval(ticker);
        return;
      } else {
        setDays(differenceInCalendarDays(saleEndDate, currentDate));
        setHours(differenceInHours(saleEndDate, currentDate) % 24);
        setMinutes(differenceInMinutes(saleEndDate, currentDate) % 60);
        setSeconds(differenceInSeconds(saleEndDate, currentDate) % 60);
      }
    }, 1000);

    // The code must have a cleanup function.
    return () => {
      clearInterval(ticker);
    };
  }, [days, hours, minutes, seconds]);

  // The code must have conditional styling to hide the component when the sale has ended. This is an example.
  return (
    <>
      <aside
        className={
          !saleIsRunning || removeWhenSaleIsComplete
            ? "hidden"
            : "p-4 flex flex-col justify-center bg-black text-white items-center space-x-4"
        }
      >
        <div className="flex items-center space-x-2 font-semibold text-xl">
          <TagIcon className="w-6 h-6" />
          <p>Mix & Match Buy 1 Get 1 50% off!</p>
        </div>
        <div className="flex items-center space-x-1 text-sm capitalize">
          <p>Sale ends in</p>
          <p className="flex items-center ">
            <span className="text-2xl font-bold px-1 align-middle">{days}</span> Days
          </p>
          <p className="flex items-center">
            <span className="text-2xl font-bold px-1">{hours}</span> Hours
          </p>
          <p className="flex items-center">
            <span className="text-2xl font-bold px-1">{minutes}</span> Minutes
          </p>
          <p className="flex items-center">
            <span className="text-2xl font-bold px-1">{seconds}</span> seconds
          </p>
        </div>
      </aside>
    </>
  );
}

export default SalesBanner;