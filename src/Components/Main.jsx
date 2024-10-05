import users from './users'
import Info from './Info';
const Main=()=>{
    const adminUsers=users.filter((user)=>{
        return user.role=="admin;"
    });
    // (user => user.role === "admin")
    const adminAges = adminUsers.map(user => user.age);
    const totalAge = adminAges.reduce((acc, age) => acc + age, 0);
    const averageAge = totalAge / adminAges.length;
    return(
        <>
        {users.map((element)=>{
            if(element.role=="user"){
              return <Info name={element.name} age={element.age}/>
            }
        })}
        {<Info admin={averageAge}/>}
        </>
    )
}
export default Main;