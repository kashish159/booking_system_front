import React, { useState, useEffect } from 'react'
import HotelsCommonSection from '../shared/HotelsCommonSection'
import '../styles/tour.css'
import HotelCard from './../shared/HotelCard'
import SearchBar1 from './../shared/SearchBar1'
import Newsletter from './../shared/Newsletter'
import { Col, Container, Row } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
// import { getFeaturedHotelCount } from '../../../backend/Controllers/hotelControllers'

function Hotels(){

      const [pageCount, setPageCount] = useState(0)
      const [page, setPage] = useState('')
      // const {featured}=hotel;
      const { data: hotels, loading, error } = useFetch(`${BASE_URL}/hotels?page=${page}`)
      const { data: HotelCount } = useFetch(`${BASE_URL}/hotels/search/getHotelCount`)
   
      useEffect(() => {
         console.log(HotelCount)
         const pages = Math.ceil(HotelCount / 80)
         setPageCount(pages)
         // window.scrollTo(0,0)
         // console.log(pageCount)
      }, [page, HotelCount, hotels])

    return(
        <div className="hotel-section">
            <HotelsCommonSection title={"All Hotels"} />
            <section>
                <Container>
                    <Row>
                        <SearchBar1 />
                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
            <Container>
               {loading && <h4 className='text-center pt-5'>LOADING..........</h4>}
               {error && <h4 className='text-center pt-5'>{error}</h4>}
               {
                  !loading && !error &&
                  <Row>
                     {
                        hotels?.map(hotel => (<Col lg='3' md='6' sm='6' className='mb-4' key={hotel._id}> <HotelCard hotel={hotel} /> </Col>))
                     }

                     <Col lg='12'>
                        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                           
                              {[...Array(pageCount).keys()].map(number => (
                                 <span key={number} onClick={() => setPage(number)}
                                    className={page === number ? 'active__page' : ''}
                                 >
                                    {number + 1}
                                 </span>
                              ))}
                        </div>
                     </Col>
                  </Row>
               }
            </Container>
         </section>
         <Newsletter />
        </div>
    )
}

export default Hotels;