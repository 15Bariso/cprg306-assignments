export default function Employee(props){

    //I can deconstryct in the below 2 'const' ways

    const {name, age, salary}=props;

    //OR

  //  const name=props.name;
//    const age=props.age;
   // const salary=props.salary

    return(<section className="bg-pink-200 p-4 m-4">
        <p className="font-bold text-blue-900">Name: {name}</p>
        <p>Age: {age}</p>
        <p><span className="font-bold">Salary:</span> {salary}</p>
        </section>);
}