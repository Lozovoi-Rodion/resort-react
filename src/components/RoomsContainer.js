import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from "../Context";
import Loading from './Loading';

const RoomContainer = ( {context:{loading, sortedRooms, rooms}}) => {
    return <>{loading ? <Loading/> :
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/></>
    }</>
};

export default withRoomConsumer(RoomContainer);


//
// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {({loading, sortedRooms, rooms}) => {
//                 return <>{loading ? <Loading/> :
//                     <div>
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                 }</>
//             }}
//         </RoomConsumer>
//
//     );
// };
//
// export default RoomsContainer;
//
