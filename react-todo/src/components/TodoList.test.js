import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    // Test: Ensure the initial todos are rendered
    test('renders initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    });

    // Test: Ensure a new todo can be added
    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');

        // Simulate user input and clicking the "Add" button
        fireEvent.change(input, { target: { value: 'Write Tests' } });
        fireEvent.click(addButton);

        // Verify the new todo is rendered
        expect(screen.getByText('Write Tests')).toBeInTheDocument();
    });

    // Test: Ensure a todo can be toggled between completed and not completed
    test('toggles todo completion', () => {
        render(<TodoList />);
        const todo = screen.getByText('Learn React');

        // Verify initial state (not completed)
        expect(todo).not.toHaveStyle('text-decoration: line-through');

        // Simulate clicking the todo to toggle completion
        fireEvent.click(todo);
        expect(todo).toHaveStyle('text-decoration: line-through');

        // Simulate clicking the todo again to toggle back to not completed
        fireEvent.click(todo);
        expect(todo).not.toHaveStyle('text-decoration: line-through');
    });

    // Test: Ensure a todo can be deleted
    test('deletes a todo', () => {
        render(<TodoList />);
        const todo = screen.getByText('Learn React');
        const deleteButton = todo.nextSibling; // The delete button is the next sibling of the todo text

        // Simulate clicking the delete button
        fireEvent.click(deleteButton);

        // Verify the todo is no longer rendered
        expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
});