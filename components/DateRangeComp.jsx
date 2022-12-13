import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { Input } from '@material-tailwind/react'

const DateRangeComp = () => {

    // date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    // open close
    const [open, setOpen] = useState(false)

    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        // console.log(e.key)
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    return (
        <div className="calendarWrap">
            <Input
                variant="outlined" 
                size="lg" 
                label="Check Date" 
                type="text"
                value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(range[0].endDate, "dd/MM/yyyy")}`}
                readOnly
                className="bg-white text-black-airbnb"
                onClick={() => setOpen(open => !open)}
                placeholder="check Date"
            />

            <div ref={refOne}>
                {open &&
                    <DateRange
                        onChange={item => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={1}
                        direction="horizontal"
                        className="calendarElement"
                    />
                }
            </div>
            <div className='flex justify-center my-7'>
                <button className='btn bg-pink-airbnb border-none hover:bg-[#E75056] normal-case text-[22px]'>Check Availability</button>
            </div>            
        </div>
    )
}

export default DateRangeComp