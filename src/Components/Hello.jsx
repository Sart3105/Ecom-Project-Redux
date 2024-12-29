function Hello(props) {
  
  return (
    <div>
    <h1>Hi Mr.
    {" "+props.personInfo.name + props.personInfo.emotion+" "+ props.personInfo.message+props.personInfo.Rollno}
    </h1>
    </div>
  );
}

export default Hello;
