/**
 * @openapi
 *  components:
 *   schemas:
 *    quantativeParameters:
 *     type: object
 *     properties:
 *       min-ncpu:
 *         type: integer
 *         format: int64
 *       max-ncpu:
 *         type: integer
 *         format: int64
 *       min-ram-mb:
 *         type: integer
 *         format: int64
 *       max-ram-mb:
 *         type: integer
 *         format: int64
 *       min-storage-mb:
 *         type: integer
 *         format: int64
 *       max-storage-mb:
 *         type: integer
 *         format: int64
 *       min-cores:
 *         type: integer
 *         format: int64
 *       max-cores:
 *         type: integer
 *         format: int64
 * 
 * 
 *    pipelineRequirements:
 *      type: object
 *      properties:
 *       requirements:
 *         $ref: '#/components/schemas/requirements'
 *    requirements:
 *      type: object
 *      properties:
 *       quantativeParameters:
 *         $ref: '#/components/schemas/quantativeParameters'
 *       osRequirement:
 *         $ref: '#/components/schemas/osRequirement'
 *       cpu-architecture:
 *         type: string
 *       tee:
 *         type: boolean
 *    osRequirement: 
 *      type: object
 *      properties:
 *       os-type:
 *         type: string
 *   
 *    ResponseDSL:
 *     type: object
 *     properties:
 *       orderHash: 
 *         type: string
 *       category:
 *         type: integer
 *
 *    ResponseForContractListing:
 *     type: object
 *     properties:
 *       contractID: 
 *         type: string
 *       creationTime:
 *         type: string
 *  
 *   securitySchemes:
 *     Bearer:
 *      type: apiKey
 *      description: Enter your Keycloak bearer token in the format bellow (don't forget the "Bearer") Bearer YOUR_ACCESS_TOKEN
 *      #authorizationUrl: https://datacloud-auth.euprojects.net/auth/
 *      name: Authorization
 *      in: header
 */



let router = require('express').Router();
// const keycloak = require('../configs/keycloak-config.js').getKeycloak();


router.get('/', function(req, res) {
	res.json({
		status: 'API Is working',
		message: 'Welcome to Rest API node.js'
	})
});

var resourceController = require('../Controllers/ResourceController');
/**
 * @openapi
 * '/resources':
 *  post:
 *     tags:
 *     - Find Resources
 *     summary: Find resources by the DSL defined resource requirements
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            $ref: '#/components/schemas/pipelineRequirements'
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseDSL'
 *       401:
 *          description:
 *       400:
 *         description: Missing values!!! Invalid resource requirements information; correct the format
 *         content: {}
 *     x-codegen-request-body-name: requestResources
 *     security:
 *     - api_key: []
 */
router.post('/resources', resourceController.findCompatibleResource);



var contractController = require('../Controllers/ContractController');
/**
 * @openapi
 * '/contracts/list':
 *  get:
 *     tags:
 *     - Get My Contracts
 *     summary: Request the list of contracts of a given user
 *     parameters:
 *       - in: query
 *         name: userAddress
 *         schema:
 *           type: string
 *         required: true
 *         description: User Address
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseForContractListing'
 *       400:
 *         description: Invalid user address
 *         content: {}
 *     x-codegen-request-body-name: Contract Initiation
 *     security:
 *     - api_key: []
 */
router.get('/contracts/list', contractController.getList);

module.exports = router;

