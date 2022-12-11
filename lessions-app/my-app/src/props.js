import UserImg from "./profile-images/images";

function WhoAmI({name, surname, link}) {
    return (
        <div>
            <div>
                <h1>My name is {name()}, surname - {surname}</h1>
                <a href={link}>My link</a>
            </div>
                <UserImg/>
        </div>
    )
}

export default WhoAmI;





// function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <Avatar user={props.author}/> 
//           {/* props.props.author.avatarUrl == props.user.avatarUrl */}
//           <div className="UserInfo-name">
//           <UserName name={props.author}/>
//           {/* props.props.author.name  == props.name.name */}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }

// <Comment 
//     author={{name: '...', surname: "...", avatarUrl: "url"}} 
//     text="..." 
//     date="..." 
// />