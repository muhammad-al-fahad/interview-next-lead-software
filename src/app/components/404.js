import Image from "next/image";

const Page_404 = () => {

  function showPage() {
    setTimeout(() => {
        document.getElementById("loader").style.display = 'none';
        document.getElementById("myDiv").style.display = 'block';
    }, 100);
  }

  return (
    <div onLoad={showPage}>
      <div id="loader"></div>
      <div id="myDiv" className='page__404'>
        <Image className='notfound__img' src="/404.jpg" alt="404 Page Not Found" width={1920} height={1080}/>
      </div>
    </div>
  );
}

export default Page_404;
