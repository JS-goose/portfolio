import React from 'react'
import { Link } from 'gatsby'

const AnchorLink = (props) => {
    // ! Now I just need to add the classes as props to be passed in from the component
    if (props.linkType === 'internal') {
        return <Link to={props.linkAddress}>{props.addressText}</Link>
    } else {
        // ! Now I just need to add the classes as props to be passed in from the component
        return (<>
            <a href={props.linkAddress}
                className={`${props.styling.height} before:empty-content before:h-1 before:absolute ${props.styling.beforeBgColor} before:mt-5 ${props.styling.hoverBgColor} ${props.styling.hoverTextColor}`}
                rel="noopener noreferrer">{props.addressText}</a>
        </>)
    }
}

export default AnchorLink