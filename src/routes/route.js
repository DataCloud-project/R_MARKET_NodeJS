/**
 * @openapi
 *  components:
 *   schemas:
 *    User:
 *      type: object
 *      properties:
 *        uid:
 *          type: string
 *      xml:
 *        name: User
 *    Param:
 *      type: object
 *      properties:
 *        req1:
 *          type: string
 *        req2:
 *          type: string
 *    Deal:
 *      type: object
 *      properties:
 *        dealID:
 *          type: string
 *        TxHash:
 *          type: string
 *        Block Timestamp:
 *          type: string
 *        requesterInfo:
 *          type: string
 *        maestroAgentID:
 *          type: string
 *        Callback:
 *          type: string
 *        app:
 *          type: string
 *        workerpool:
 *          type: array
 *          items:
 *            type: string
 *        dataset:
 *          type: string
 *        environmentParameters:
 *          $ref: '#/components/schemas/Param'
 *        volume:
 *          type: integer
 *          format: int64
 *        quantativeParameters:
 *          $ref: '#/components/schemas/quantativeParameters'  
 *        cpu-architecture:
 *          type: string
 *        gpu-architecture:
 *          type: string
 *        gpu-availability:
 *          type: boolean
 *        tee:
 *          type: boolean          
 *        trust:
 *          type: integer
 *          format: int64
 *        osRequirement: 
 *          $ref: '#/components/schemas/osRequirement' 
 *        First task idx:
 *          type: string
 *        Block Number:
 *          type: integer
 *          format: int64
 *        Category:
 *          type: integer
 *          format: int64
 *        workerpoolprice:
 *          type: array
 *          items:
 *            type: integer
 *            format: int64
 *        appprice:
 *          type: integer
 *          format: int64
 *        datasetprice:
 *          type: integer
 *          format: int64
 *        Start Time:
 *          type: string
 *        Final Time:
 *          type: string
 * 
 * 
 *    executionRequirments:
 *     type: object
 *     properties:
 *       min-instant:
 *         type: integer
 *         format: int64
 *       max-instant:
 *         type: integer
 *         format: int64
 * 
 *    ResourceProvider:
 *     type: object
 *     properties:
 *       provider name:
 *         type: string
 *       instance type:
 *         type: string
 *       location:
 *         type: string
 * 
 * 
 *    environmentParameters:
 *     type: object
 *     properties:
 *       envReq1:
 *         type: string
 *       envReq2:
 *         type: string
 * 
 * 
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
 *    apporder:
 *     type: object
 *     properties:
 *       app:
 *         type: string
 *       appprice:
 *         type: string
 *       volume:
 *         type: integer
 *         format: int64
 *       tag:
 *         type: string
 *       datasetrestrict:
 *         type: string
 *       workerpoolrestrict:
 *         type: string
 *       requesterrestrict:
 *         type: string
 * 
 * 
 *    datasetorder:
 *     type: object
 *     properties:
 *       dataset:
 *         type: string
 *       datasetprice:
 *         type: string
 *       volume:
 *         type: integer
 *         format: int64
 *       tag:
 *         type: string
 *       datasetrestrict:
 *         type: string
 *       workerpoolrestrict:
 *         type: string
 *       requesterrestrict:
 *         type: string
 * 
 * 
 *    workerpoolorder:
 *     type: object
 *     properties:
 *       workerpool:
 *         type: string
 *       workerpoolprice: 
 *         type: string
 *       volume:
 *         type: integer
 *         format: int64
 *       quantativeParameters:
 *         $ref: '#/components/schemas/quantativeParameters'  
 *       category:
 *         type: integer
 *         format: int64
 *       cpu-architecture:
 *         type: string
 *       gpu-architecture:
 *         type: string
 *       gpu-availability:
 *         type: boolean
 *       tee:
 *         type: boolean          
 *       trust:
 *         type: integer
 *         format: int64
 *       osRequirement: 
 *         $ref: '#/components/schemas/osRequirement'  
 *       maestroAgentAddr:
 *         type: string
 *       tag:
 *         type: string
 *       datasetrestrict:
 *         type: string
 *       apprestrict:
 *         type: string
 *       requesterrestrict:
 *         type: string
 * 
 * 
 *    appordersign:
 *     type: object
 *     properties:
 *       app:
 *         type: string
 *       appprice: 
 *         type: string
 *       volume:
 *         type: integer
 *         format: int64
 *       tag:
 *         type: string
 *       datasetrestrict:
 *         type: string
 *       workerpoolrestrict:
 *         type: string
 *       requesterrestrict:
 *         type: string
 *       salt:
 *         type: string
 *       sign: 
 *         type: string
 *         
 *    datasetordersign:
 *     type: object
 *     properties:
 *       dataset:
 *         type: string
 *       datasetprice: 
 *         type: string
 *       volume:
 *         type: integer
 *         format: int64
 *       tag:
 *         type: string
 *       datasetrestrict:
 *         type: string
 *       workerpoolrestrict:
 *         type: string
 *       requesterrestrict:
 *         type: string
 *       salt:
 *         type: string
 *       sign: 
 *         type: string
 *         
 *    workerpoolordersign:
 *     type: object
 *     properties:
 *       workerpool:
 *         type: string
 *       workerpoolprice: 
 *         type: string
 *       volume:
 *         type: integer
 *         format: int64
 *       quantativeParameters:
 *         $ref: '#/components/schemas/quantativeParameters'  
 *       category:
 *         type: integer
 *         format: int64
 *       cpu-architecture:
 *         type: string
 *       gpu-architecture:
 *         type: string
 *       gpu-availability:
 *         type: boolean
 *       tee:
 *         type: boolean          
 *       trust:
 *         type: integer
 *         format: int64
 *       osRequirement: 
 *         $ref: '#/components/schemas/osRequirement'  
 *       maestroAgentAddr:
 *         type: string
 *       tag:
 *         type: string
 *       datasetrestrict:
 *         type: string
 *       apprestrict:
 *         type: string
 *       requesterrestrict:
 *         type: string
 *       salt:
 *         type: string
 *       sign: 
 *         type: string
 *     
 *         
 *    ResponseDSL:
 *     type: object
 *     properties:
 *       apporder:
 *         $ref: '#/components/schemas/apporder'
 *       datasetorder:
 *         $ref: '#/components/schemas/datasetorder'
 *       workerpoolInfo:
 *         type: array
 *         xml:
 *           name: workerpool
 *           wrapped: true
 *         items:
 *           $ref: '#/components/schemas/workerpoolInfo'
 *
 *    workerpoolInfo:
 *     type: object
 *     properties:
 *       workerpoolAvailability:
 *         $ref: '#/components/schemas/workerpoolAvailability'
 *       workerpoolorder:
 *         $ref: '#/components/schemas/workerpoolorder'
 *
 *    workerpoolorderdetails:
 *     type: object
 *     properties:
 *       workerpool:
 *         type: string
 *       workerIP:
 *         type: string
 *    createContract:
 *     type: object
 *     properties:
 *       pipelineID:
 *         type: string
 *       apporder:
 *           $ref: '#/components/schemas/appordersign'
 *       datasetorder:
 *           $ref: '#/components/schemas/datasetordersign'
 *       workerpoolorder:
 *         type: array
 *         xml:
 *           name: selectedworkerpool
 *           wrapped: true
 *         items:
 *           $ref: '#/components/schemas/workerpoolordersign'
 *       #maestroAgentAddr:
 *         #type: string
 *       requesterInfo:
 *         type: string
 *       sign:
 *         type: string
 *         
 *    responseforGetResource:
 *     type: object
 *     properties:
 *       workerpoolIPInfo:
 *         type: array
 *         xml:
 *           name: workerpoolIPInfo
 *           wrapped: true
 *         items:
 *           $ref: '#/components/schemas/workerpoolorderdetails'
 *    responseForContractCreation:
 *     type: object
 *     properties:
 *       requesterInfo:
 *         type: string
 *       requestID:
 *         type: string
 *       status:
 *         type: string
 *    pipelineRequirements:
 *      type: object
 *      properties:
 *       pipelineID: 
 *         type: string
 *       requirements:
 *         $ref: '#/components/schemas/requestResources'
 *    requestResources:
 *      type: object
 *      properties:
 *       appmaxprice:
 *         type: integer
 *         format: int64
 *       app: 
 *         type: string
 *       dataset:
 *         type: string
 *       datasetmaxprice:
 *         type: integer
 *         format: int64
 *       workerpoolmaxprice:
 *         type: integer
 *         format: int64
 *       executionRequirements:
 *         $ref: '#/components/schemas/executionRequirments'
 *       quantativeParameters:
 *         $ref: '#/components/schemas/quantativeParameters'
 *       ResourceProvider:
 *         $ref: '#/components/schemas/ResourceProvider'
 *       osRequirement:
 *         $ref: '#/components/schemas/osRequirement'
 *       cpu-architecture:
 *         type: string
 *       gpu-architecture:
 *         type: string
 *       gpu-availability:
 *         type: boolean
 *       tee:
 *         type: boolean
 *       maestroAgentAddr: 
 *         type: string
 *       environmentParameters:
 *         $ref: '#/components/schemas/environmentParameters'
 *       requesterInfo:
 *         type: string
 *     #  salt:
 *     #    type: string
 *     #  sign:
 *     #    type: string
 *    osRequirement: 
 *      type: object
 *      properties:
 *       os-type:
 *         type: string
 *       is-64:
 *         type: integer
 *         format: int64
 *   
 *    workerpoolAvailability:
 *      type: object
 *      properties:
 *       workerpool:
 *         type: string
 *       ResourceProvider:
 *         $ref: '#/components/schemas/ResourceProvider'
 *       environmentParameters:
 *         $ref: '#/components/schemas/environmentParameters'      
 *       
 *       
 *   securitySchemes:
 *     Bearer:
 *      type: apiKey
 *      description: Enter you your Keyclaok bearer token in the format bellow (don't forget the "Bearer") Bearer YOUR_ACCESS_TOKEN
 *      #authorizationUrl: https://datacloud-auth.euprojects.net/auth/
 *      name: Authorization
 *      in: header
 */
let router = require('express').Router();
// const keycloak = require('../configs/keycloak-config.js').getKeycloak();


router.get('/', function(req,res){
    res.json({
        status: 'API Is working',
        message: 'Welcome to Rest API node.js'
    })
});


var walletController = require('../Controllers/WalletController');
router.post('/wallet/CreateWallet',walletController.createWalletForUser);

var resourceController = require('../Controllers/ResourceController');
/**
 * @openapi
 * '/resources':
 *  post:
 *     tags:
 *     - findResources
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
router.post('/resources',resourceController.findCompatibleResource);

var contractController = require('../Controllers/ContractController');
/**
 * @openapi
 * '/contract/deals':
 *  post:
 *     tags:
 *     - createContract
 *     summary: Request for initiating the Contract (Deal)
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            $ref: '#/components/schemas/createContract'
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/responseForContractCreation'
 *       400:
 *         description: Invalid Order
 *         content: {}
 *     x-codegen-request-body-name: Contract Initiation
 *     security:
 *     - api_key: []
 */
router.post('/contract/deals', contractController.createContract);


/**
 * @openapi
 * '/contract/deals/status/{requestID}':
 *  get:
 *     tags:
 *     - createContract
 *     summary: Returns the dealID and dealInfo for checking the status
 *     operationId: getDealInventory
 *     parameters:
 *     - name: requestID
 *       in: path
 *       description: Please enter your requestID to know the status of the deal
 *       required: true
 *       schema:
 *         type: string
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Deal'
 *       400:
 *         description: Contract has not been created yet! Come back after few minutes
 *         content: {}
 *     security:
 *     - api_key: []
 */

 router.get('/contract/deals/status/:requestId',contractController.getDealsByRequestId);


var workersIP = require('../Controllers/WorkersIpController');
/**
 * @openapi
 * '/resources/IP/{dealID}':
 *  get:
 *     tags:
 *     - getResourcesForPipeline
 *     summary: Returns the IP of provisioned resource(s)
 *     operationId: getResourcesForPipeline
 *     parameters:
 *     - name: dealID
 *       in: path
 *       description: Provide the dealID for collecting the Reserved resources' IP
 *       required: true
 *       schema:
 *         type: string
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/responseforGetResource'
 *     security:
 *     - api_key: []
 */
router.get('/resources/IP/:dealId',workersIP.getProvisionedWorkersByIP);

var orderController = require('../Controllers/OrderController');
router.post('/order/appOrder',orderController.addAppOrder);
router.post('/order/dataSetOrder',orderController.addDataSetOrder);
router.post('/order/workerPoolOrder',orderController.addWorkerPoolOrder);

module.exports = router;

