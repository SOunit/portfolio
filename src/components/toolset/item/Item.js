import classes from './Item.module.css';

const item = (props) => {
  return (
    <div className={classes['item']}>
      <i className={`${props.data.iconClassName} ${classes['item__icon']}`}></i>
      <p className='item__title'>{props.data.title}</p>
      <span>{props.data.rate}</span>
    </div>
  );
};

export default item;
