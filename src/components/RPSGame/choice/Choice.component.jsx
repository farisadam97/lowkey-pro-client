import {settings} from '../config/game';
import './Choice.css';


export const Choice = ({ value, id, className, choiceIcon, onClick }) => {
    console.log(settings)
    return (
      <div value={value} onClick={onClick}>
        <img className={className} id={id} src={choiceIcon} alt="icon" />
      </div>
    );
  };

export const Selection = ({children, userScore, trophyIcon}) => {
    return(
        <>
        {userScore < settings.winTarget ? (
            <>
            <div className="selection">
            {children} 
            </div>
            {/* <h3>{userSelection === "" ? "Pick one!" : `Your choice: ${userSelection}`}</h3> */}
            </>
        ) : (
            <>
            <img src={trophyIcon} className='trophyStyle' alt="trophy" />
            <h3 style={{textAlign:"center"}}>Victory!</h3>
            </>
        )}
        </>
        
    )
}

export const SelectionComputer = ({children, pcScore, trophyIcon}) => {
    return(
        <>
            {pcScore < settings.winTarget ? (
            <>
            <div className="show computer">
            {children}
            </div>
            {/* <h3>{userSelection === "" ? "Pick one!" : `Your choice: ${userSelection}`}</h3> */}
            </>
            ) : (
                <>
                <img src={trophyIcon} className='trophyStyle' alt="trophy" />
                <h3 style={{textAlign:"center"}}>Victory!</h3>
                </>
            )}
        </>
        
    )
}

export const ChoiceComputer = ({ pcScore, userSelection, pcSelection, id, className, imgbatu, imgkertas, imggunting, activeimg, trophyIcon }) => {
    console.log(pcSelection);
    return (
        <>
            {pcScore < settings.winTarget ? (
                userSelection === "" ? (
                    <>
                    <div>
                        <img className={className} id={id} src={imgbatu} alt="icon" />
                    </div>
                    <div>
                        <img className={className} id={id} src={imgkertas} alt="icon" />
                    </div>
                    <div>
                        <img className={className} id={id} src={imggunting} alt="icon" />
                    </div>
                    </>
                //   <h3 className="waiting-message">{settings.waitingMessage}</h3>
                ) : (
                <>
                   {
                        pcSelection === "Rock" ? 
                        (<div>
                            <img className={className, activeimg} id={id} src={imgbatu} alt="icon" />
                        </div>) : 
                        (<div>
                        <img className={className} id={id} src={imgbatu} alt="icon" />
                        </div>)
                    } 
                    {
                        pcSelection === "Paper" ? 
                        (<div>
                            <img className={className, activeimg} id={id} src={imgkertas} alt="icon" />
                        </div>) : 
                        (<div>
                            <img className={className} id={id} src={imgkertas} alt="icon" />
                        </div>)
                    }
                    {   
                         pcSelection === "Scissors" ? 
                        (<div>
                            <img className={className, activeimg} id={id} src={imggunting} alt="icon" />
                        </div>) :
                        (<div>
                            <img className={className} id={id} src={imggunting} alt="icon" />
                        </div>)
                    }
                    {/* <h3>PC selected: {pcSelection}</h3> */}
                </>
                )
            ) : (
                <>
                <img src={imggunting} alt="trophy" />
                <h3 style={{textAlign:"center"}}>Victory!</h3>
                </>
            )
            }
        </>
      
    );
  };

