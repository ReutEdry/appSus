export function DynamicNote(props) {
    console.log(props);
    switch (props.type) {
        case 'TextBox':
            return <RateByTextbox {...props} label="RateByTextbox" />;
        case 'SelectBox':
            return <SelectBox {...props} label="Select Rating" opts={['1', '2', '3', '4', '5']} />;
        case 'RateByStars':
            return <RateByStars {...props} />;
        default:
            return null;
    }
}