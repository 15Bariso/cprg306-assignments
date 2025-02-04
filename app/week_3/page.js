import Employee from "./employee";
export default function Page(){
    let employee1={
        name:"John",
        age:30,
        salary:25000
    };

    let employee2={
        name:"Henry",
        age:25,
        salary:50000
    };

    let employee3={
        name:"Mike",
        age:27,
        salary:80000
    };

    return(<main>
        <h1 className="text-2xl font-bold text-center">Employee Details</h1>
        <Employee 
        name={employee1.name} 
        age={employee1.age} 
        salary={employee1.salary}/>

    <Employee 
        name={employee2.name} 
        age={employee2.age} 
        salary={employee2.salary}/>

    <Employee 
        name={employee3.name} 
        age={employee3.age} 
        salary={employee3.salary}/>
        </main>);
}