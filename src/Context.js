import React, {Component} from 'react';
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };


    // getData
    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        });
    };

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        return tempRooms.find(room => room.slug === slug)
    };


    formatData(items) {
        return items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            return {...item.fields, images, id}
        });
    }

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom
            }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

// export function withRoomConsumer(Component) {
//     return function ConsumerWrapper(props) {
//
//     }
// }
export const withRoomConsumer = (Component) => {
    return (props) => {
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
};


export {RoomProvider, RoomConsumer, RoomContext};
