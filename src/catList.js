import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
    return { cats: state.listView.catList.images || [] };
};
const ConnectedList = ({ cats }) => (
    <div>
        {cats.map(el => (
            <img
                key={el.id}
                src = {el.url} 
                alt = ''/>
        ))}
    </div>
);
const List = connect(mapStateToProps)(ConnectedList);

export default List