// Code PasswordInput Component Here

function PasswordInput (){
    const handleChange= (event)=>{
        console.log("Typing password....");
        console.log(event.target.value);
            };


    return(
        <div>
            <label>
                Password: </label>
                <input
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
                />
        </div>
    );
}

export default PasswordInput;