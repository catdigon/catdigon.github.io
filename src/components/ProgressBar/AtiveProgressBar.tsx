import { ProgressBar } from "react-bootstrap";

interface Props {
    active: boolean;
    showLabel: boolean;
    label: string;
}

export default function ActiveBarProgress({ active = true, showLabel = true, label }: Props) {

    return (
        <>
            {active && showLabel && (
                <label htmlFor="progress-bar"
                    style={{ fontSize: 16 }}>{label}</label>
            ) ||
                <label htmlFor="progress-bar"
                    style={{ fontSize: 12 }}>{label}</label>
            }
            {active && showLabel && (
                <ProgressBar id="progress-bar"
                    variant="info"
                    now={40}
                    style={{ height: 6 }} />
            ) ||
                <ProgressBar id="progress-bar"
                    variant="info"
                    now={0}
                    style={{ height: 2}} />
            }
        </>
    )
}