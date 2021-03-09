import React from 'react'
import { Link } from 'gatsby'

const AnchorLink = (props) => {
    // ! This needs work before it's ready to use - standard class as well as props.class needs to be added
    // ! Maybe I can look at styles in this component instead of a css file because of the content/width needing to be in the same rule
    if (props.linkType === 'internal') {
        return <Link to={props.linkAddress}>{props.addressText}</Link>
    } else {
        return <a href={props.linkAddress} rel="noopener noreferrer">{props.addressText}</a>
    }
}

export default AnchorLink