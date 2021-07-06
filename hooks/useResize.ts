import { useState, useEffect } from "react"

const useResize = (ref: React.RefObject<HTMLDivElement>) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWidth(ref.current ? ref.current.offsetWidth : 0)
            setHeight(ref.current ? ref.current.offsetHeight : 0)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [ref])

    return { width, height }
}

export default useResize