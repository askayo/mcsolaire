export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
            <div className='row'>
              <div className='col-md-4  '>
                <img src={"img/mirroirbanner.png"}/>
              </div>

              <div className={'col-md-2'}/>


              <div className='col-md-5 intro-text'>

                <h2>
                  {props.data ? props.data.subtitle : 'Loading'}
                </h2>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                </h1>

                <div className=''>
                  <div>
                    <p id="paragraph">{props.data ? props.data.paragraph : 'Loading'}</p>
                  </div>
                  <div>
                    <p id="price">{props.data ? props.data.price : 'Loading'}</p>
                  </div>
                </div>

                <a href='#features' className='btn btn-custom btn-lg page-scroll'>
                  Commander
                </a>{' '}
              </div>
            </div>
          </div>

        {/*<div> BlockJaune </div>*/}
      </div>
    </header>
  )
}
