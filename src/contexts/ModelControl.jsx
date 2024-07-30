import { useControls } from "leva";
import { createContext, useContext, useState, useEffect } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const [IsDrag, SetDrag] = useState(false);
  const [IsPresenting, SetPresenting] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ffffff");
  let path = window.location.pathname.substring(1);
  const [currentModelName, setCurrentModelName] = useState(path);

  const { Color } = useControls({
    Color: {
      options: {
        "Original": "#ffffff",
        "Blue": "#0B60B0",
        "Green": "#65B741",
        "Orange": "#EE7214",
      },
      onChange: (Val) => {
        setCurrentColor(Val);
      },
    },
    Model: {
      value: currentModelName,
      options: {
        "Sofa 1": "sofa1",
        "Sofa 2": "sofa2",
        "Sofa 3": "sofa3",
        "Sofa 4": "sofa4",
        "Sofa 5": "sofa5",
       
      },
      onChange: (value) => {
        setCurrentModelName(value);
      },
    },
  });

  useEffect(() => {
    setCurrentModelName((prevModelName) => {
      if (path !== prevModelName) {
        return path;
      }
      return prevModelName;
    });
  }, [path]);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        currentModelName,
        setCurrentModelName,
        Color,
        IsDrag,
        SetDrag,
        currentColor,
        setCurrentColor,
        SetPresenting,
        IsPresenting
      }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
