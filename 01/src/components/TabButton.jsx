export default function TabButton({ children, isSelected ,...props}) {
  return (
    //  in line 5 we use the {...props} to make we use Onclick In Examples.jsx
    <li>
      <button className={isSelected ? 'active' : undefined}{...props}>{children}</button>
    </li>
  );
}
