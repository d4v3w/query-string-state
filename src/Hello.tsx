export interface NameFragmentProps { 
    name: string
}

const NameFragment: React.FC<NameFragmentProps> = (props) => {
  // get the name from props
  const name = props.name;

  // return a React fragment with a h1 tag
  return <h1>Hello {name}</h1>
}

export default NameFragment;
