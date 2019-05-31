// tslint:disable
// graphql typescript definitions


  export interface IGraphQLResponseRoot {
    data?: IQuery | IMutation | ISubscription;
    errors?: Array<IGraphQLResponseError>;
  }

  export interface IGraphQLResponseError {
    message: string;            // Required for all errors
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
  }

  export interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  /**
    description: Query type for all get requests which will not change persistent data
  */
  export interface IQuery {
    __typename?: "Query";
    status: IStatusQueryType | null;
    getCrowdsaleInfo: IEthereumCrowdsaleType | null;
    checkTokenValidity: IUserCheckValidityType | null;
    findUserByEmail: IUserType | null;
    findUser: IUserType | null;
    listUsers: IUserListType | null;
    searchForUser: IUserType | null;
    getClientId: IGetClientId | null;
    setUserType: IUserTokenType | null;
    listQuests: IQuestListType | null;
    listSharedQuests: IQuestShareListType | null;
    listAppliedQuests: IQuestApplicationListType | null;
    listOrganizationQuests: IQuestListType | null;
    findQuest: IQuestType | null;
    listMyQuests: IQuestListType | null;
    findWallet: IWalletType | null;
    listWallets: IWalletListType | null;
    findConsultant: IConsultantType | null;
    listConsultants: IConsultantListType | null;
    findOrganization: IOrganizationType | null;
    listOrganizations: IOrganizationListType | null;
    findQuestShare: IQuestShareType | null;
    isQuestShared: IQuestShareType | null;
    getConsultantSkills: IConsultantQuestSkillListType | null;
    getHomepageStats: IStatisticsType | null;
    getOrganizationSkills: IOrganizationQuestSkillListType | null;
    listActivities: IActivityListType | null;
    listActivitiesByUserId: IActivityListType | null;
    isQuestApplied: IQuestApplicationType | null;
    listQuestApplications: IQuestApplicationListType | null;
    findQuizPage: IQuizPagesType | null;
    listQuizPages: IQuizPagesListType | null;
    listQuestSkillTemplates: IQuizPagesListType | null;
    getQuestSkills: IQuestSkillTemplateListType | null;
    serverStatus: IServerStatusType | null;
    serverErrors: IServerErrorsType | null;
}

  
  export interface IStatusQueryType {
    __typename?: "StatusQueryType";
    status: string | null;
}

  
  export interface IEthereumCrowdsaleType {
    __typename?: "EthereumCrowdsaleType";
    startTime: number | null;
    endTime: number | null;
    hasEnded: boolean | null;
    token: string | null;
    weiRaised: number | null;
    wallet: string | null;
}

  
  export interface IUserCheckValidityType {
    __typename?: "UserCheckValidityType";
    validity: boolean | null;
}

  
  export interface IUserType {
    __typename?: "UserType";
    id: string | null;
    displayName: string | null;
    type: string | null;
    settings: IUserSettingsType | null;
    interviewed: boolean | null;
    email: string | null;
    quests: Array<IQuestType> | null;
    wallets: Array<IWalletType> | null;
    consultantId: string | null;
    consultant: IConsultantType | null;
    organizationId: string | null;
    organization: IOrganizationType | null;
    organizations: Array<IOrganizationType> | null;
    isFirstTimeLogin: boolean | null;
}

  
  export interface IUserSettingsType {
    __typename?: "UserSettingsType";
    sidebar: boolean | null;
    language: string | null;
    avatar: string | null;
}

  
  export interface IQuestType {
    __typename?: "QuestType";
    id: string | null;
    title: string | null;
    picture: string | null;
    time: string | null;
    bounty: string | null;
    public: boolean | null;
    description: string | null;
    openedBefore: string | null;
    timeLeft: string | null;
    contributors: IUserType | null;
    tags: string | null;
    verifiedAsCompleted: boolean | null;
    completed: boolean | null;
    stage: number | null;
    milestone: string | null;
    opened: boolean | null;
    userId: string | null;
    organizationId: string | null;
    percentage: number | null;
    consultantId: string | null;
    consultant: IConsultantType | null;
    organization: IOrganizationType | null;
    user: IUserType | null;
    shared: boolean | null;
    sharedWith: Array<IQuestShareType> | null;
    applications: Array<IQuestApplicationType> | null;
}

  
  export interface IConsultantType {
    __typename?: "ConsultantType";
    id: string | null;
    linkedInProfile: string | null;
    name: string | null;
    biography: string | null;
    email: string | null;
    type: number | null;
    industry: string | null;
    xp: string | null;
    stage: number | null;
    bounties: string | null;
    invitations: string | null;
    endorsments: string | null;
    followers: Array<IUserType> | null;
    contacts: string | null;
    recommendations: string | null;
    userId: string | null;
    user: IUserType | null;
    clientsProjects: string | null;
    totalQuestCompleted: number | null;
    totalWonQST: number | null;
}

  
  export interface IOrganizationType {
    __typename?: "OrganizationType";
    id: string | null;
    userId: string | null;
    user: IUserType | null;
    name: string | null;
    linkedInProfile: string | null;
    email: string | null;
    totalQuests: string | null;
    clientsProjects: string | null;
    size: number | null;
    location: string | null;
    recommendations: string | null;
    phoneNumber: string | null;
    stack: string | null;
    bounties: string | null;
    experience: string | null;
    website: string | null;
    skype: string | null;
    founders: Array<IUserType> | null;
    representative: IConsultantType | null;
    industry: string | null;
    type: number | null;
    stage: string | null;
    description: string | null;
    quests: Array<IQuestType> | null;
    questSkills: Array<IQuestType> | null;
    team: Array<IUserType> | null;
    advisors: Array<IUserType> | null;
    products: string | null;
}

  
  export interface IQuestShareType {
    __typename?: "QuestShareType";
    id: string | null;
    message: string | null;
    userId: string | null;
    user: IUserType | null;
    questId: string | null;
    quest: IQuestType | null;
}

  
  export interface IQuestApplicationType {
    __typename?: "QuestApplicationType";
    id: string | null;
    userId: string | null;
    user: IUserType | null;
    questId: string | null;
    quest: IQuestType | null;
}

  
  export interface IWalletType {
    __typename?: "WalletType";
    id: string | null;
    type: string | null;
    userId: string | null;
    address: string | null;
}

  /**
    description: Simple user list with count and rows
  */
  export interface IUserListType {
    __typename?: "UserListType";
    count: number | null;
    rows: Array<IUserType> | null;
}

  
  export interface IGetClientId {
    __typename?: "getClientId";
    clientId: string | null;
}

  
  export interface IUserTokenType {
    __typename?: "UserTokenType";
    token: string | null;
    user: IUserType | null;
}

  
  export interface IQuestListType {
    __typename?: "QuestListType";
    count: number | null;
    rows: Array<IQuestType> | null;
    offset: number | null;
}

  
  export interface IQuestShareListType {
    __typename?: "QuestShareListType";
    count: number | null;
    rows: Array<IQuestShareType> | null;
}

  
  export interface IQuestApplicationListType {
    __typename?: "QuestApplicationListType";
    count: number | null;
    rows: Array<IQuestApplicationType> | null;
    offset: number | null;
}

  
  export interface IWalletListType {
    __typename?: "WalletListType";
    count: number | null;
    rows: Array<IWalletType> | null;
}

  
  export interface IConsultantListType {
    __typename?: "ConsultantListType";
    count: number | null;
    offset: number | null;
    rows: Array<IConsultantType> | null;
}

  
  export interface IOrganizationListType {
    __typename?: "OrganizationListType";
    count: number | null;
    offset: number | null;
    rows: Array<IOrganizationType> | null;
}

  
  export interface IConsultantQuestSkillListType {
    __typename?: "ConsultantQuestSkillListType";
    count: number | null;
    rows: Array<IConsultantQuestSkillType> | null;
    offset: number | null;
}

  
  export interface IConsultantQuestSkillType {
    __typename?: "ConsultantQuestSkillType";
    id: string | null;
    description: string | null;
    title: string | null;
    percentage: number | null;
    bounty: string | null;
    userId: string | null;
    stage: number | null;
    key: string | null;
}

  
  export interface IStatisticsType {
    __typename?: "StatisticsType";
    organizations: number | null;
    players: number | null;
    activeQuests: number | null;
    completedQuests: number | null;
}

  
  export interface IOrganizationQuestSkillListType {
    __typename?: "OrganizationQuestSkillListType";
    count: number | null;
    rows: Array<IOrganizationQuestSkillType> | null;
    offset: number | null;
}

  
  export interface IOrganizationQuestSkillType {
    __typename?: "OrganizationQuestSkillType";
    id: string | null;
    description: string | null;
    title: string | null;
    percentage: number | null;
    bounty: string | null;
    userId: string | null;
    stage: number | null;
    key: string | null;
}

  /**
    description: Simple activity list with count and rows
  */
  export interface IActivityListType {
    __typename?: "ActivityListType";
    count: number | null;
    rows: Array<IActivityType> | null;
}

  
  export interface IActivityType {
    __typename?: "ActivityType";
    id: string | null;
    userId: string | null;
    message: string | null;
    type: string | null;
}

  /**
    description: Simple user list with count and rows
  */
  export interface IQuizPagesType {
    __typename?: "QuizPagesType";
    id: number | null;
    order: number | null;
    title: string | null;
    subTitle: string | null;
    image: string | null;
    questions: Array<IQuizQuestionType> | null;
}

  /**
    description: Simple user list with count and rows
  */
  export interface IQuizQuestionType {
    __typename?: "QuizQuestionType";
    id: number | null;
    type: string | null;
    key: string | null;
    order: string | null;
    name: string | null;
    title: string | null;
    image: string | null;
    answers: Array<IQuizAnswerType> | null;
}

  
  export interface IQuizAnswerType {
    __typename?: "QuizAnswerType";
    value: number;
    text: string;
}

  
  export interface IQuizPagesListType {
    __typename?: "QuizPagesListType";
    count: number | null;
    rows: Array<IQuizPagesType> | null;
}

  
  export interface IQuestSkillTemplateListType {
    __typename?: "QuestSkillTemplateListType";
    count: number | null;
    rows: Array<IQuestSkillTemplateType> | null;
    offset: number | null;
}

  
  export interface IQuestSkillTemplateType {
    __typename?: "QuestSkillTemplateType";
    id: string | null;
    key: IQuestSkillTemplateEnumTypeEnum | null;
    stage: string | null;
    title: string | null;
}

export   
  type IQuestSkillTemplateEnumTypeEnum = 'FTF' | 'MCI' | 'VPF' | 'MVP' | 'ACC' | 'FFF' | 'MAB' | 'CFR' | 'IUG' | 'MAA' | 'SEF' | 'FKH' | 'PIV' | 'FPC' | 'PMF' | 'VPR' | 'UEO' | 'CFO' | 'VGA' | 'SSP' | 'LAR' | 'MCA' | 'BES' | 'FEH' | 'PRO' | 'EST';

  /**
    description: Server status
  */
  export interface IServerStatusType {
    __typename?: "ServerStatusType";
    status: boolean | null;
}

  /**
    description: Server errors 
  */
  export interface IServerErrorsType {
    __typename?: "ServerErrorsType";
    errors: Array<IServerErrorMessagesType> | null;
}

  
  export interface IServerErrorMessagesType {
    __typename?: "ServerErrorMessagesType";
    name: string | null;
    data: IServerErrorMessageLanguages | null;
}

  
  export interface IServerErrorMessageLanguages {
    __typename?: "ServerErrorMessageLanguages";
    en: IServerErrorMessagesDataType | null;
    bg: IServerErrorMessagesDataType | null;
}

  
  export interface IServerErrorMessagesDataType {
    __typename?: "ServerErrorMessagesDataType";
    message: string | null;
}

  /**
    description: Mutation type for all requests which will change persistent data
  */
  export interface IMutation {
    __typename?: "Mutation";
    register: IUserTypeRegister | null;
    login: IUserTokenType | null;
    publishSignal: IUserMessage | null;
    removeUser: IUserType | null;
    updateUser: IUserType | null;
    changePassword: IUserType | null;
    updateUserProfile: IUserType | null;
    addUser: IUserType | null;
    loginWithLinkedIn: IUserTokenType | null;
    forgotPassword: IGenericStatusType | null;
    changePasswordWithToken: IGenericStatusType | null;
    addQuest: IQuestType | null;
    addQuestAdmin: IQuestType | null;
    addQuestBulkOrganization: IQuestListType | null;
    addSpecificQuest: IQuestType | null;
    assignQuestToUser: IQuestType | null;
    updateQuest: IQuestType | null;
    removeQuest: IQuestType | null;
    completeQuest: IQuestType | null;
    verifyQuest: IQuestType | null;
    applyForQuest: IQuestType | null;
    addWallet: IWalletType | null;
    assignWalletToUser: IWalletType | null;
    updateWallet: IWalletType | null;
    removeWallet: IWalletType | null;
    removeConsultant: IConsultantType | null;
    updateConsultant: IConsultantType | null;
    addConsultant: IConsultantType | null;
    assignToConsultant: IConsultantType | null;
    addConsultantWithSpecificUser: IConsultantType | null;
    removeOrganization: IOrganizationType | null;
    addOrganization: IOrganizationType | null;
    addOrganizationWithSpecificUser: IOrganizationType | null;
    assignOrganizationToSpecificUser: IOrganizationType | null;
    updateOrganization: IOrganizationType | null;
    assignToOrganization: IOrganizationType | null;
    shareQuest: IQuestShareType | null;
    shareQuestWith: IQuestShareType | null;
    unshareQuest: IQuestShareListType | null;
    unshareQuestWithSingleUser: IQuestShareType | null;
    removeQuestShare: IQuestShareType | null;
    approveQuestApplication: IQuestShareType | null;
    addQuestBulkConsultant: IConsultantQuestSkillListType | null;
    updateConsultantSkills: IConsultantQuestSkillListType | null;
    updateConsultantSkill: IConsultantQuestSkillListType | null;
    removeConsultantQuestSkill: IConsultantQuestSkillType | null;
    addQuestSkillBulkOrganization: IOrganizationQuestSkillListType | null;
    updateOrganizationSkills: IOrganizationQuestSkillListType | null;
    updateOrganizationQuestSkill: IOrganizationQuestSkillListType | null;
    removeOrganizationQuestSkill: IOrganizationQuestSkillType | null;
    subscribeToNewsletter: ISubscriptionType | null;
    profilingRequest: ISubscriptionType | null;
    removeActivity: IActivityType | null;
    addActivity: IActivityType | null;
    removeQuizPage: IQuizPagesType | null;
    addQuizPage: IQuizPagesType | null;
    addQuestion: IQuizQuestionType | null;
    addQuizAnswer: IQuizAnswerUserType | null;
    updateProfileState: IGenericResponseType | null;
}

  
  export interface IUserTypeRegister {
    __typename?: "UserTypeRegister";
    id: string | null;
    displayName: string | null;
    email: string | null;
}

  
  export interface IUserMessage {
    __typename?: "UserMessage";
    message: string | null;
}

  
  export interface IUserPayloadType {
    displayName?: string | null;
    type?: string | null;
    email?: string | null;
    settings?: IUserInputSettingsType | null;
    isFirstTimeLogin?: boolean | null;
}

  
  export interface IUserInputSettingsType {
    sidebar?: boolean | null;
    language?: string | null;
    avatar?: string | null;
}

  
  export interface IGenericStatusType {
    __typename?: "GenericStatusType";
    status: string | null;
}

  
  export interface IAddQuestInputObject {
    description?: string | null;
    openedBefore?: string | null;
    picture?: string | null;
    time?: string | null;
    public: boolean;
    tags?: string | null;
    verifiedAsCompleted?: boolean | null;
    completed?: boolean | null;
    timeLeft?: string | null;
    title: string;
    percentage?: number | null;
    bounty: string;
    contributors?: string | null;
    stage?: number | null;
    milestone?: string | null;
    organizationId?: string | null;
    opened?: boolean | null;
    shared?: boolean | null;
}

  
  export interface IWalletInputType {
    type: string;
    password: string;
    userId: string;
}

  
  export interface IConsultantInputType {
    linkedInProfile?: string | null;
    biography?: string | null;
    industry?: string | null;
    email?: string | null;
    name?: string | null;
    type?: number | null;
    stage?: number | null;
    xp?: string | null;
    bounties?: string | null;
    invitations?: string | null;
    endorsments?: string | null;
    contacts?: string | null;
    recommendations?: string | null;
    clientsProjects?: string | null;
}

  
  export interface IAddOrganizationInputObject {
    name?: string | null;
    linkedInProfile?: string | null;
    email?: string | null;
    industry?: string | null;
    type?: string | null;
    stage?: string | null;
    description?: string | null;
    products?: string | null;
    userId?: string | null;
    totalQuests?: string | null;
    clientsProjects?: string | null;
    size?: number | null;
    location?: string | null;
    recommendations?: string | null;
    phoneNumber?: string | null;
    stack?: string | null;
    bounties?: string | null;
    experience?: string | null;
    website?: string | null;
    skype?: string | null;
}

  
  export interface IQuestShareInputType {
    userId?: string | null;
    questId: string;
    message?: string | null;
}

  
  export interface IConsultantQuestSkillInputType {
    id?: string | null;
    description?: string | null;
    title?: string | null;
    percentage?: number | null;
    bounty?: string | null;
    userId?: string | null;
    stage?: number | null;
    key?: string | null;
}

  
  export interface IOrganizationQuestSkillInputType {
    id?: string | null;
    description?: string | null;
    title?: string | null;
    percentage?: number | null;
    bounty?: string | null;
    userId?: string | null;
    stage?: number | null;
    key?: string | null;
}

  
  export interface ISubscriptionType {
    __typename?: "SubscriptionType";
    status: string | null;
}

  
  export interface IActivityPayloadType {
    userId?: string | null;
    message?: string | null;
    type?: string | null;
}

  
  export interface IQuizQuestionsInputType {
    type?: string | null;
    name?: string | null;
    title?: string | null;
    answers: Array<IQuizAnswerInputType>;
}

  
  export interface IQuizAnswerInputType {
    value: number;
    text: string;
}

  
  export interface IQuizAnswerUserInputType {
    questionId: number;
    key: string;
    answers: Array<IQuizAnswerInputType>;
}

  
  export interface IQuizAnswerUserType {
    __typename?: "QuizAnswerUserType";
    id: number | null;
    questionId: number | null;
    userId: number | null;
    answers: Array<number> | null;
}

  
  export interface IGenericResponseType {
    __typename?: "GenericResponseType";
    status: string | null;
    code: string | null;
    message: string | null;
}

  /**
    description: Subscription type for all subscriptions via pub sub
  */
  export interface ISubscription {
    __typename?: "Subscription";
    subscribeToUserMessagesBasic: IUserMessage | null;
    subscribeToUserMessagesWithFilter: IUserMessage | null;
}


// tslint:enable
