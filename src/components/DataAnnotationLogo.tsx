/**
 * Recreation of the DataAnnotation.tech logo:
 * a bold black "DA" monogram beside the stacked
 * "DATA / ANNOTATION / TECH" wordmark in grey.
 */
export default function DataAnnotationLogo({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 560 150"
            className={className}
            role="img"
            aria-label="DataAnnotation Tech logo"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* DA monogram */}
            <text
                x="0"
                y="118"
                fill="#0a0a0a"
                fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, Arial, sans-serif"
                fontWeight="900"
                fontSize="150"
                letterSpacing="-6"
            >
                DA
            </text>

            {/* Stacked wordmark */}
            <g
                fill="#8a8a8f"
                fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, Arial, sans-serif"
                fontWeight="800"
                fontSize="34"
                letterSpacing="1"
            >
                <text x="230" y="52">DATA</text>
                <text x="230" y="94">ANNOTATION</text>
                <text x="230" y="136">TECH</text>
            </g>
        </svg>
    );
}
