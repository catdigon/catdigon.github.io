import styled from "styled-components"

export default function HeaderArtStar() {

    return (
        <Animation>
            <div className="blink">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" viewBox="0 0 48 46" fill="none">
                <g filter="url(#filter0_d_23895_320675)">
                    <path d="M35.0102 0.5393L24.1612 17.231L43.1454 23.2239L23.9181 18.0639L24.0851 37.9708L23.0509 18.09L4.16987 24.4004L22.7581 17.2734L10.922 1.26645L23.4442 16.7425L35.0102 0.5393Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d_23895_320675" x="0.169922" y="0.539062" width="46.9756" height="45.4316" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23895_320675" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23895_320675" result="shape" />
                    </filter>
                </defs>
            </svg>
            </div>
        </Animation>
    )
}

const Animation = styled.div`
    .blink {
    animation: blink 4s infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
  }
`


