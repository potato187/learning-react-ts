import React, { useCallback, useState } from 'react';

type SetInputState<T> = React.Dispatch<React.SetStateAction<T>>;

const useInput = <T,>(initialState: T): [T, SetInputState<T>] => {
	const [state, setState] = useState<T>(initialState);
	return [state, setState];
};

export default useInput;
