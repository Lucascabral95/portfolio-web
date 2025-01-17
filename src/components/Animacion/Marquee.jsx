import "./Marquee.scss"
import FastMarquee from "react-fast-marquee";

export default function Marquee(props) {
    return (
        <>

            <FastMarquee
                gradient={false}
                speed={80}
                direction="left"
                pauseOnHover={true}
                pauseOnFocus={true}
                directionReverse={true}
            >
                {props.contenido}
            </FastMarquee>

        </>
    )
}
