export function CornersSVG() {
    return (
        <div className="custom-shape-divider-top">
            <svg
                id="visual"
                viewBox="0 0 900 600"
                width="100%"
                height="auto"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <rect x="0" y="0" width="900" height="600" fill="#f3f7f9"></rect>
                <defs>
                    <linearGradient id="grad1_0" x1="33.3%" y1="100%" x2="100%" y2="0%">
                        <stop offset="20%" stopColor="#f3f7f9" stopOpacity="1"></stop>
                        <stop offset="80%" stopColor="#f3f7f9" stopOpacity="1"></stop>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="grad2_0" x1="0%" y1="100%" x2="66.7%" y2="0%">
                        <stop offset="20%" stopColor="#f3f7f9" stopOpacity="1"></stop>
                        <stop offset="80%" stopColor="#f3f7f9" stopOpacity="1"></stop>
                    </linearGradient>
                </defs>
                <g transform="translate(900, 600)">
                    <path
                        d="M-243.4 0C-228.9 -15.5 -214.4 -31 -209.6 -47.8C-204.9 -64.7 -209.9 -82.8 -208.1 -100.2C-206.4 -117.7 -197.8 -134.5 -187.6 -149.6C-177.5 -164.7 -165.8 -178.1 -151.7 -190.3C-137.7 -202.5 -121.4 -213.4 -103.3 -214.4C-85.2 -215.4 -65.3 -206.4 -47.8 -209.6C-30.3 -212.8 -15.2 -228.1 0 -243.4L0 0Z"
                        fill="#dee9ee"
                    ></path>
                </g>
                <g transform="translate(0, 0)">
                    <path
                        d="M243.4 0C226.3 14 209.2 28 209.6 47.8C210 67.7 227.8 93.3 219.3 105.6C210.7 117.8 175.7 116.7 161.1 128.4C146.4 140.2 152.1 164.9 145.9 182.9C139.7 201 121.5 212.4 102.8 213.5C84.1 214.6 64.9 205.4 47.6 208.6C30.4 211.9 15.2 227.6 0 243.4L0 0Z"
                        fill="#dee9ee"
                    ></path>
                </g>
            </svg>
        </div>
    )
}