import { Component as ReactComponent, ReactNode } from 'react';

interface NoUpdateAction {
  type: 'NO_UPDATE';
}

interface UpdateAction<S> {
  type: 'UPDATE';
  state: S;
}

interface SideEffectsAction<E> {
  type: 'SIDE_EFFECTS';
  sideEffects: E;
}

interface UpdateWithSideEffectsAction<S, E> {
  type: 'UPDATE_WITH_SIDE_EFFECTS';
  state: S;
  sideEffects: E;
}

export function noUpdate(action: { type: never }): NoUpdateAction;

export function update<S>(state: S): UpdateAction<S>;

export function sideEffects<E>(sideEffects: E): SideEffectsAction<E>;

export function updateWithSideEffects<S, E>(
  state: S,
  sideEffects: E,
): UpdateWithSideEffectsAction<S, E>;

interface ActionShape {
  type: string;
  [key: string]: any;
}

interface Props<S, A> {
  initialState: S;
  reducer: (
    state: S,
    action: A,
  ) =>
    | NoUpdateAction
    | UpdateAction<S>
    | SideEffectsAction<(state: S) => any>
    | UpdateWithSideEffectsAction<S, (state: S) => any>;
  render: (
    { state, send }: { state: S; send: (action: A) => void },
  ) => ReactNode;
}

interface State<S> {
  internalState: S;
}

export class Component<S, A extends ActionShape> extends ReactComponent<
  Props<S, A>,
  State<S>
> {}
