import HeaderArtGraphics from "./HeaderArtGraphics";
import HeaderArtStar from "./HeaderArtStar";

export default function HeaderArt() {

    return(
        <div style={{ position: 'relative', border: '1px solid blue '}}>
        <HeaderArtGraphics />

            <div style={{ position: 'absolute', left: 20, bottom: 20 }}>
                <HeaderArtStar />  
            </div>
        </div>
    )
}