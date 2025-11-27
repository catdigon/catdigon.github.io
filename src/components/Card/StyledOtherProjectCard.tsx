import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const TransparentLink = styled(HashLink)`
  display: inline-flex;
  align-items: center;
  max-width: fit-content;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #0080A3;
    filter: drop-shadow(0 0 10px rgba(0,128,163,0.4))
            drop-shadow(0 0 20px rgba(0,128,163,0.2));
  }
`;