/* eslint-disable react/jsx-key */
const data: any = [];

export const MyComponent = () => {
  const castData = data as { name: string }[];

  return (
    <div>
      {castData.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};
