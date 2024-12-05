
import { PRODUCTS_ENDPOINTS } from "../../constants/endpoints";



describe('add new product', () => {
    context('DELETE product ', () => {

        it('should delete a product from the database ', () => { 
            const id =7;

            cy.api({
                method: 'DELETE',
                url: PRODUCTS_ENDPOINTS.product+'/'+id , 
               
            }).then((res) => {
                    expect(res.status).to.eq(200);
                    expect (res.body.id).to.not.be.null;

                                       
            })
        })
    })
})

