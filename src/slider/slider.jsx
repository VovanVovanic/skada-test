import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setUser, fetchUserData } from "../redux/actions/popup";
import Arrow from './arrow'
import styles from './slider.module.scss'

const Slider = () => {
  const posts = useSelector((state) => state.posts.posts);
  const slides = posts.slice(0, 3)
  let slidesWidth = 474 * slides.length + (24 * (slides.length - 1));

  const [state, setState] = useState({
    currentIndex: 0,
    offset: 0,
    transitionDuration: 0.5,
  });
  const { currentIndex, offset, transitionDuration } = state;
  console.log(currentIndex);

  const dispatch = useDispatch()
  const popUpHandler = (el) => {
    dispatch(setUser(el));
    dispatch(fetchUserData(el.id));
  };
  useEffect(() => {
    const moveTimeout = setTimeout(() => {
      setState({ ...state, transitionDuration: 0 });
    }, transitionDuration * 100);
    return () => {
      clearTimeout(moveTimeout);
    };
  }, [currentIndex]);

  const moveTo = (index, duration) => {
    setState({
      currentIndex: index,
      offset: 498 *index,
      transitionDuration: `${duration}`,
    });
  };

  const handleBack = () => {
    console.log('left');
    moveTo(currentIndex + 1, 0.5);
  };
  const handleForward = () => {
    console.log('right');
    moveTo(currentIndex - 1, 0.5);
  };
  const slideItems = slides.map((el) => {
    return (
      <div key={el.title} className={styles.slide} onClick={() => popUpHandler(el)}>
        {el.title}
        <button>read more</button>
      </div>
    );
  })
console.log(currentIndex);

  return (
    <div className={styles.slider}>
      <div
        style={{
          width: `${slidesWidth}px`,
          transform: `translateX(${offset}px)`,
          transition: `${transitionDuration}s`,
        }}
        className={styles.wrap}
      >
        {slideItems}
      </div>

      {currentIndex !== 0 && <Arrow variant={"left"} handleMove={handleBack} />}

      {-currentIndex !== slides.length -1 && (
        <Arrow variant={"right"} handleMove={handleForward} />
      )}
    </div>
  );
}
export default Slider