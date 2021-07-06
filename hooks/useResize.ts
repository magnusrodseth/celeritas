import { useState, useEffect } from "react"

const useResize = (ref: React.RefObject<HTMLDivElement>) => {
    const getDimensions = () => ref.current
        ? {
            width: ref.current.offsetWidth,
            height: ref.current.offsetHeight
        }
        : {
            width: 0,
            height: 0
        }


    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions())
        }

        if (ref.current) {
            setDimensions(getDimensions())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref])

    return dimensions;
}

export default useResize