import React, { useEffect } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTodo, getTodo } from '../redux/actions';

const Todoscreen = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    // const fetchTodo = async () => {
    //     try {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    //         const data = await response.json();

    //         dispatch(fetchTodo(data));
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    useEffect(() => {
       dispatch( getTodo() );
    }, [])

    return (
        <ScrollView>
            { todos.map(todo => (
                <Text key={todo.id}>{todo.title}</Text>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Todoscreen;
