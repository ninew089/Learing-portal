// @flow

import { Component as ReactComponent } from 'react';
import type { Node } from 'react';

type NoUpdateAction = {|
  type: 'NO_UPDATE',
|};

type UpdateAction<S> = {|
  type: 'UPDATE',
  state: S,
|};

type SideEffectsAction<E> = {|
  type: 'SIDE_EFFECTS',
  sideEffects: E,
|};

type UpdateWithSideEffectsAction<S, E> = {|
  type: 'UPDATE_WITH_SIDE_EFFECTS',
  state: S,
  sideEffects: E,
|};

export function noUpdate(action: { type: empty }): NoUpdateAction {
  return {
    type: 'NO_UPDATE',
  };
}

export function update<S>(state: S): UpdateAction<S> {
  return {
    type: 'UPDATE',
    state,
  };
}

export function sideEffects<E>(sideEffects: E): SideEffectsAction<E> {
  return {
    type: 'SIDE_EFFECTS',
    sideEffects,
  };
}

export function updateWithSideEffects<S, E>(
  state: S,
  sideEffects: E,
): UpdateWithSideEffectsAction<S, E> {
  return {
    type: 'UPDATE_WITH_SIDE_EFFECTS',
    state,
    sideEffects,
  };
}

type ActionShape = {
  type: $Subtype<string>,
};

type Props<S, A> = {|
  initialState: S,
  reducer: (
    state: S,
    action: A,
  ) =>
    | NoUpdateAction
    | UpdateAction<S>
    | SideEffectsAction<(state: S) => any>
    | UpdateWithSideEffectsAction<S, (state: S) => any>,
  render: ({|
    state: S,
    send: (action: A) => void,
  |}) => Node,
|};

type State<S> = {|
  internalState: S,
|};

export class Component<S, A: ActionShape> extends ReactComponent<
  Props<S, A>,
  State<S>,
> {
  constructor(props: Props<S, A>) {
    super(props);

    this.state = {
      internalState: props.initialState,
    };
  }

  render() {
    return this.props.render({
      state: this.state.internalState,
      send: action => {
        let sideEffects: ?(state: S) => any;

        this.setState(
          state => {
            const reducedAction = this.props.reducer(
              state.internalState,
              action,
            );

            switch (reducedAction.type) {
              case 'NO_UPDATE':
                return null;
              case 'UPDATE':
                return { internalState: reducedAction.state };
              case 'SIDE_EFFECTS':
                sideEffects = reducedAction.sideEffects;
                return null;
              case 'UPDATE_WITH_SIDE_EFFECTS':
                sideEffects = reducedAction.sideEffects;
                return { internalState: reducedAction.state };
              default:
                noUpdate(reducedAction);
                return state;
            }
          },
          () => {
            sideEffects && sideEffects(this.state.internalState);
          },
        );
      },
    });
  }
}
