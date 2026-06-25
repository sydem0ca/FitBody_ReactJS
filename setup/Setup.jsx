import "./setup.css"

const setupQuestions = [
    "What's Your Gender?",
    "How old Are You?",
    "What Is Your Weight?",
    "What Is Your Height?",
    "What Is Your Goal?",
    "Physical Activity Level?",
    "Fill Your Profile",
]

const goalsList = [
    {
        name: "Lost Weight",
        status: "no",
    },
    {
        name: "Gain Weight",
        status: "no",
    },
    {
        name: "Mescle Mass Gain",
        status: "no",
    },
    {
        name: "Shape Body",
        status: "no",
    },
    {
        name: "Others",
        status: "no",
    },
]

function getSetupSubtitle(index) {
    if (index === 1){
        return (
            <div className="accent__section">
                <div className="accent__info">
                    <h3 className="accent__subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae vel voluptas natus distinctio doloremque eaque quas vero nostrum blanditiis?</h3>
                </div>
            </div>
        )
    }else{
        return (
            <div className="accent__section">
                <div className="section__info">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit facere vero error accusantium architecto?</h3>
                </div>
            </div>
        )
    }
}

function getSetupActivity(index){
    if (index === 1){
        return(
            <div className="setup__option">
                <div className="setup__option-button">
                    <button
                        type="button"
                        className="button-accent button-circle"
                        id="male-button"
                    >
                        <img 
                            src="../ico/male-active.png" 
                            alt=""
                            className="button-circle-img"
                        />
                    </button>
                    <label 
                        htmlFor="male-button"
                        className="button-lable"
                    >
                        Male
                    </label>
                </div>
                <div className="setup__option-button">
                    <button
                        type="button"
                        className="button-circle"
                        id="male-button"
                    >
                        <img 
                            src="../ico/female.png" 
                            alt=""
                            className="button-circle-img"
                        />
                    </button>
                    <label 
                        htmlFor="female-button"
                        className="button-lable"
                    >
                        Female
                    </label>
                </div>
            </div>
        )
    }else if (index === 6){
        return (
            <div className="setup__option">
                <div className="setup__option-button">
                    <button
                        type="button"
                        className="button-big button-white"
                    >
                    Beginner
                    </button> 
                </div>
                <div className="setup__option-button">
                    <button
                        type="button"
                        className="button-big button-white"
                    >
                    Intermediate
                    </button> 
                </div>
                <div className="setup__option-button">
                    <button
                        type="button"
                        className="button-big button-accent"
                    >
                    Advanced
                    </button> 
                </div>
            </div>
        )
        
    }else if (index === 7){
        return(
            <div className="setup__option">
                <div className="accent__section">
                    <div className="accent__info">
                        <img 
                            src="../img/avatar.png" 
                            alt=""
                            className="avatar-img"
                        />
                        <button className="button-accent button-circle circle-small">
                            <img 
                                src="./ico/edit-ico.png" 
                                alt="" 
                            />
                        </button>
                    </div>
                </div>
                <div className="setup__form">
                    <div className="form__personal">
                        <div className="form__element">
                            <label 
                                htmlFor="full-name" 
                                className="element__title"
                            >
                                Full name
                            </label>
                            <input type="text" name="full-name-field" id="full-name" />
                        </div>
                        <div className="form__element">
                            <label 
                                htmlFor="username" 
                                className="element__title"
                            >
                                Username
                            </label>
                            <input type="text" name="username-field" id="username" />
                        </div>
                        <div className="form__element">
                            <label 
                                htmlFor="e-mail" 
                                className="element__title"
                            >
                                E-mail
                            </label>
                            <input type="email" name="e-mail-field" id="e-mail" />
                        </div>
                        <div className="form__element">
                            <label 
                                htmlFor="phone" 
                                className="element__title"
                            >
                                Mobile Number
                            </label>
                            <input type="number" name="phone-field" id="phone" />
                        </div>
                    </div>
                </div>                
            </div>
        )
    }else if (index === 5){
        return(
            <div className="accent_section">
                <div className="accent__info">
                    <div className="form__goal">
                        <div className="form__element">
                            {getFormGoal()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if (index === 2){
        return (
            <div className="setup__option">
                <div className="option__age">
                    <h4 className="h4-accent">
                        {currentAge}
                    </h4>
                    
                    <div className="age__counter">
                        <img 
                            src="./ico/arrow-up.png" 
                            alt="" 
                            className="age__pointer" 
                        />
                        <div className="accent__info">
                            <span className="pointer-line-right"></span>
                            <span className="pointer-line-left"></span>
                            {rouletLineSet(0,99,setupIndex)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if (index === 3){
        return(
            <div className="setup__option">
                <div className="setup__metrick">
                    <button
                        type="button"
                        className={`button-metrick ${metrickWeigth === "Kg" ? "is-active": ""}`}
                    >
                        KG
                    </button>
                    <span className="metrick-line"></span>
                    <button
                        type="button"
                        className={`button-metrick ${metrickWeigth === "Lb" ? "is-active": ""}`}
                    >
                        LB
                    </button>
                </div>
                <div className="option__weight">
                    
                    <div className="weight__counter">
                        <div className="accent__info">
                            {rouletLineSet(0, 250, index)}
                            {rouletLineSetLine(0, 250, index)}
                        </div>
                        <img 
                            src="./ico/arrow-up.png" 
                            alt="" 
                            className="weight__pointer" 
                        />
                    </div>
                    <h4 className="h4-accent">
                        {`${currentWeight}`} <span className="h4-accent-extra">{`${metrickWeigth}`}</span>
                    </h4>
                    
                </div>
            </div>
        )
    }else if (index === 4){
        return(
            <div className="setup__option">
                <div className="option__height">
                    <h4 className="h4-accent">
                        {currentHeight} <span className="h4-accent-extra">Cm</span>
                    </h4>
                    
                    <div className="height__counter">
                        <div className="height__roulet">
                            <div className="height__nums">
                                {rouletLineSet(0, 250, setupIndex)}
                            </div>
                            <div className="height__marks">
                                {rouletLineSetLine(0,250,setupIndex)}
                            </div>
                        </div>
                        <img 
                            src="./ico/pointer-left.png" 
                            alt="" 
                            className="height__pointer" 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

function getFormGoal(){
    return(
        <>
            {goalsList.map(element => 
            <div className="form__button">{
                <button className={`button-big button-white ${element.status === "yes" ? "is-active" : ""}`}>
                    {element.name}
                    <img
                        src={`${element.status === "no"? "./ico/check-no.png" : "./ico/check-yes.png"}`}
                    >
                    </img>
                </button>
                }
            </div>
            )}
        </>
    )
}

function rouletLineSet(min,max,index){
    let content = []
    if (index === 2){
        for (let i = min; i <= max; i ++){
            content.push(<h5 className={`age-element ${i === currentAge ? "current-age" : ""} ${((i === currentAge - 1) || (i === currentAge + 1)) ? "near-age" : ""}`}>{i}</h5>);
        }
        return (<div className="age-line">{content}</div>)
    }else if (index === 3){
        for (let i = min; i <= max; i ++){
            content.push(<h5 className={`weight-element ${i === currentWeight ? "current-weight" : ""} ${((i === currentWeight - 1) || (i === currentWeight + 1)) ? "near-weight" : ""}`}>{i}</h5>);
        }
        return (<div className="weight-line">{content}</div>)
    }else if (index === 4){
        for (let i = min; i <= max; i ++){
            content.push(<h5 className={`height-element ${i === currentHeight ? "current-height" : ""} ${((i === currentHeight - 1) || (i === currentHeight + 1)) ? "near-height" : ""}`}>{i}</h5>);
        }
        return (<div className="height-line">{content}</div>)
    }
}

function rouletLineSetLine(min,max,index){
    let content = []
    if (index === 3){
        for (let i = min; i <= max; i ++){
            if (i === currentWeight){
                content.push(
                    <img
                        src="./ico/scale-current.png"
                        alt=""
                        className="pointer__line-weight is-active"
                    >
                    </img>)
            }else{
                content.push(
                    <img
                        src="./ico/scale-marks.png"
                        alt=""
                        className="pointer__line-weight"
                    >
                    </img>);
            }
        }
        return (<div className="weight__scale">{content}</div>)
    }if (index === 4){
        for (let i = min; i <= max; i ++){
            if (i === currentHeight){
                content.push(
                    <img
                        src="./ico/scale-current-vertical.png"
                        alt=""
                        className="pointer__line-height is-active"
                    >
                    </img>)
            }else{
                content.push(
                    <img
                        src="./ico/scale-marks-vertical.png"
                        alt=""
                        className="pointer__line-height"
                    >
                    </img>);
            }
        }
        return (<div className="height__scale">{content}</div>)
    }
}

let setupIndex = 0

let currentAge = 28

let metrickWeigth = "Kg"

let currentWeight = 75

let currentHeight = 165

const Setup = () => {

    if (setupIndex === 0){
        return(
            <div className="setup__preview">
                <div className="window__body body__small">
                    <h1 className="preview__title">
                        Consistency Is <br />the Key To progress. <br />Don't Give Up!
                    </h1>
                    <div className="accent__section">
                        <div className="accent__info">
                            <h3 className="accent__subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime praesentium facere similique vitae explicabo eius, nostrum voluptatem voluptatibus eveniet dignissimos.
                            </h3>
                        </div>
                    </div>
                    <button
                        type="button" 
                        className="button"
                    >
                        Next
                    </button>
                </div>
            </div>
        )
    }else{
        return(
            <div className="setup__profile">
                <div className="window__header">
                    <button className="button-small button-back button-arrow-left">
                        Back
                    </button>
                </div>
                <div className="window__body">
                    <div className="window__main">
                        <h2 className="main__title">{setupQuestions[setupIndex-1]}</h2>
                        {getSetupSubtitle(setupIndex)}
                    </div>
                    <div className="window__activity">
                        {getSetupActivity(setupIndex)}
                    </div>
                    <button 
                        className={`button ${setupIndex === 7 ? "button-accent" : ""}`}>
                        {setupIndex === 7 ? "Start" : "Continue"}
                    </button>
                </div>
            </div>
        )
    }
    
}

export default Setup