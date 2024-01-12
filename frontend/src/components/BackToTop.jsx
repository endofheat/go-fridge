import {useEffect} from 'react';

export default function BackToTop() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      {/* <div style={{height: '155rem'}} /> */}

      {/* scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          //backgroundColor: '#rgb(43, 143, 126)',
          color: '##95aabe',
          textAlign: 'center',
        }}
      >
        Back to top
      </button>
    </div>
  );
}