import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
          alt="Whatsapp Logo"
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color='#2FB943' size={60} />
      </div>
    </center>
  );
};

export default Loading;
