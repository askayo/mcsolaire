export const Team = (props) => {
  return (
    <div id='inspiration' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Inspiration</h2>
          <p>
            Quelques idées de décorations avec le MC solaire
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 col-sm-6 inspiration'>
                  <div className=''>
                    {' '}
                    <img src={d.img} alt='...' className='inspiration-img' />

                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
