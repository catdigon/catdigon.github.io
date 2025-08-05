import styled from "styled-components";

export const StarAnimationStyle = styled.div`
.animate {
  animation: blink 12s infinite ease-in-out;
  opacity: 1;
}

.animate[data-index="0"] {
  animation-delay: 0s;
}
.animate[data-index="1"] {
  animation-delay: 1s;
}
.animate[data-index="2"] {
  animation-delay: 2s;
}
.animate[data-index="3"] {
  animation-delay: 3s;
}
.animate[data-index="4"] {
  animation-delay: 4s;
}
.animate[data-index="5"] {
  animation-delay: 5s;
}
.animate[data-index="6"] {
  animation-delay: 6s;
}

@keyframes blink {
  0%   { opacity: 1; }
  10%   { opacity: 1; }
  20%  { opacity: 0.2; }
  30%  { opacity: 1; }
  100% { opacity: 1; }
}
`