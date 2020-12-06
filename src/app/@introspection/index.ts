/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
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

  
  export interface IQuery {
    __typename?: "Query";
    /**
    description?: fetch data from the table?: "users"
  */
    users?: Array<IUsers>;
    /**
    description?: fetch aggregated fields from the table?: "users"
  */
    users_aggregate?: IUsersAggregate;
    /**
    description?: fetch data from the table?: "users" using primary key columns
  */
    users_by_pk?: IUsers | null;
    capsules?: Array<ICapsule> | null;
    capsulesPast?: Array<ICapsule> | null;
    capsulesUpcoming?: Array<ICapsule> | null;
    capsule?: ICapsule | null;
    company?: IInfo | null;
    cores?: Array<ICore> | null;
    coresPast?: Array<ICore> | null;
    coresUpcoming?: Array<ICore> | null;
    core?: ICore | null;
    dragons?: Array<IDragon> | null;
    dragon?: IDragon | null;
    histories?: Array<IHistory> | null;
    historiesResult?: IHistoriesResult | null;
    history?: IHistory | null;
    landpads?: Array<ILandpad> | null;
    landpad?: ILandpad | null;
    launches?: Array<ILaunch> | null;
    launchesPast?: Array<ILaunch> | null;
    launchesPastResult?: ILaunchesPastResult | null;
    launchesUpcoming?: Array<ILaunch> | null;
    launch?: ILaunch | null;
    launchLatest?: ILaunch | null;
    launchNext?: ILaunch | null;
    launchpads?: Array<ILaunchpad> | null;
    launchpad?: ILaunchpad | null;
    missions?: Array<IMission> | null;
    missionsResult?: IMissionResult | null;
    mission?: IMission | null;
    payloads?: Array<IPayload> | null;
    payload?: IPayload | null;
    roadster?: IRoadster | null;
    rockets?: Array<IRocket> | null;
    rocketsResult?: IRocketsResult | null;
    rocket?: IRocket | null;
    ships?: Array<IShip> | null;
    shipsResult?: IShipsResult | null;
    ship?: IShip | null;
}

export   /**
    description?: select columns of table "users"
  */
  type IUsersSelectColumnEnum = 'id' | 'name' | 'rocket' | 'timestamp' | 'twitter';

  /**
    description: ordering options when selecting data from "users"
  */
  export interface IUsersOrderBy {
    id?: IOrderByEnum | null;
    name?: IOrderByEnum | null;
    rocket?: IOrderByEnum | null;
    timestamp?: IOrderByEnum | null;
    twitter?: IOrderByEnum | null;
}

export   /**
    description?: column ordering options
  */
  type IOrderByEnum = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last';

  /**
    description: Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'.
  */
  export interface IUsersBoolExp {
    _and?: Array<IUsersBoolExp> | null;
    _not?: IUsersBoolExp | null;
    _or?: Array<IUsersBoolExp> | null;
    id?: IUuidComparisonExp | null;
    name?: IStringComparisonExp | null;
    rocket?: IStringComparisonExp | null;
    timestamp?: ITimestamptzComparisonExp | null;
    twitter?: IStringComparisonExp | null;
}

  /**
    description: expression to compare columns of type uuid. All fields are combined with logical 'AND'.
  */
  export interface IUuidComparisonExp {
    _eq?: any | null;
    _gt?: any | null;
    _gte?: any | null;
    _in: Array<any>;
    _is_null?: boolean | null;
    _lt?: any | null;
    _lte?: any | null;
    _neq?: any | null;
    _nin: Array<any>;
}

  /**
    description: expression to compare columns of type String. All fields are combined with logical 'AND'.
  */
  export interface IStringComparisonExp {
    _eq?: string | null;
    _gt?: string | null;
    _gte?: string | null;
    _ilike?: string | null;
    _in: Array<string>;
    _is_null?: boolean | null;
    _like?: string | null;
    _lt?: string | null;
    _lte?: string | null;
    _neq?: string | null;
    _nilike?: string | null;
    _nin: Array<string>;
    _nlike?: string | null;
    _nsimilar?: string | null;
    _similar?: string | null;
}

  /**
    description: expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.
  */
  export interface ITimestamptzComparisonExp {
    _eq?: any | null;
    _gt?: any | null;
    _gte?: any | null;
    _in: Array<any>;
    _is_null?: boolean | null;
    _lt?: any | null;
    _lte?: any | null;
    _neq?: any | null;
    _nin: Array<any>;
}

  /**
    description?: columns and relationships of "users"
  */
  export interface IUsers {
    __typename?: "users";
    id?: any;
    name?: string | null;
    rocket?: string | null;
    timestamp?: any;
    twitter?: string | null;
}

  /**
    description?: aggregated selection of "users"
  */
  export interface IUsersAggregate {
    __typename?: "users_aggregate";
    aggregate?: IUsersAggregateFields | null;
    nodes?: Array<IUsers>;
}

  /**
    description?: aggregate fields of "users"
  */
  export interface IUsersAggregateFields {
    __typename?: "users_aggregate_fields";
    count?: number | null;
    max?: IUsersMaxFields | null;
    min?: IUsersMinFields | null;
}

  /**
    description?: aggregate max on columns
  */
  export interface IUsersMaxFields {
    __typename?: "users_max_fields";
    name?: string | null;
    rocket?: string | null;
    timestamp?: any | null;
    twitter?: string | null;
}

  /**
    description?: aggregate min on columns
  */
  export interface IUsersMinFields {
    __typename?: "users_min_fields";
    name?: string | null;
    rocket?: string | null;
    timestamp?: any | null;
    twitter?: string | null;
}

  
  export interface ICapsulesFind {
    id?: string | null;
    landings?: number | null;
    mission?: string | null;
    original_launch?: any | null;
    reuse_count?: number | null;
    status?: string | null;
    type?: string | null;
}

  
  export interface ICapsule {
    __typename?: "Capsule";
    id?: string | null;
    landings?: number | null;
    missions?: Array<ICapsuleMission> | null;
    original_launch?: any | null;
    reuse_count?: number | null;
    status?: string | null;
    type?: string | null;
    dragon?: IDragon | null;
}

  
  export interface ICapsuleMission {
    __typename?: "CapsuleMission";
    flight?: number | null;
    name?: string | null;
}

  
  export interface IDragon {
    __typename?: "Dragon";
    active?: boolean | null;
    crew_capacity?: number | null;
    description?: string | null;
    diameter?: IDistance | null;
    dry_mass_kg?: number | null;
    dry_mass_lb?: number | null;
    first_flight?: string | null;
    heat_shield?: IDragonHeatShield | null;
    height_w_trunk?: IDistance | null;
    id?: string | null;
    launch_payload_mass?: IMass | null;
    launch_payload_vol?: IVolume | null;
    name?: string | null;
    orbit_duration_yr?: number | null;
    pressurized_capsule?: IDragonPressurizedCapsule | null;
    return_payload_mass?: IMass | null;
    return_payload_vol?: IVolume | null;
    sidewall_angle_deg?: number | null;
    thrusters?: Array<IDragonThrust> | null;
    trunk?: IDragonTrunk | null;
    type?: string | null;
    wikipedia?: string | null;
}

  
  export interface IDistance {
    __typename?: "Distance";
    feet?: number | null;
    meters?: number | null;
}

  
  export interface IDragonHeatShield {
    __typename?: "DragonHeatShield";
    dev_partner?: string | null;
    material?: string | null;
    size_meters?: number | null;
    temp_degrees?: number | null;
}

  
  export interface IMass {
    __typename?: "Mass";
    kg?: number | null;
    lb?: number | null;
}

  
  export interface IVolume {
    __typename?: "Volume";
    cubic_feet?: number | null;
    cubic_meters?: number | null;
}

  
  export interface IDragonPressurizedCapsule {
    __typename?: "DragonPressurizedCapsule";
    payload_volume?: IVolume | null;
}

  
  export interface IDragonThrust {
    __typename?: "DragonThrust";
    amount?: number | null;
    fuel_1?: string | null;
    fuel_2?: string | null;
    pods?: number | null;
    thrust?: IForce | null;
    type?: string | null;
}

  
  export interface IForce {
    __typename?: "Force";
    kN?: number | null;
    lbf?: number | null;
}

  
  export interface IDragonTrunk {
    __typename?: "DragonTrunk";
    cargo?: IDragonTrunkCargo | null;
    trunk_volume?: IVolume | null;
}

  
  export interface IDragonTrunkCargo {
    __typename?: "DragonTrunkCargo";
    solar_array?: number | null;
    unpressurized_cargo?: boolean | null;
}

  
  export interface IInfo {
    __typename?: "Info";
    ceo?: string | null;
    coo?: string | null;
    cto_propulsion?: string | null;
    cto?: string | null;
    employees?: number | null;
    founded?: number | null;
    founder?: string | null;
    headquarters?: IAddress | null;
    launch_sites?: number | null;
    links?: IInfoLinks | null;
    name?: string | null;
    summary?: string | null;
    test_sites?: number | null;
    valuation?: number | null;
    vehicles?: number | null;
}

  
  export interface IAddress {
    __typename?: "Address";
    address?: string | null;
    city?: string | null;
    state?: string | null;
}

  
  export interface IInfoLinks {
    __typename?: "InfoLinks";
    elon_twitter?: string | null;
    flickr?: string | null;
    twitter?: string | null;
    website?: string | null;
}

  
  export interface ICoresFind {
    asds_attempts?: number | null;
    asds_landings?: number | null;
    block?: number | null;
    id?: string | null;
    missions?: string | null;
    original_launch?: any | null;
    reuse_count?: number | null;
    rtls_attempts?: number | null;
    rtls_landings?: number | null;
    status?: string | null;
    water_landing?: boolean | null;
}

  
  export interface ICore {
    __typename?: "Core";
    asds_attempts?: number | null;
    asds_landings?: number | null;
    block?: number | null;
    id?: string | null;
    missions?: Array<ICapsuleMission> | null;
    original_launch?: any | null;
    reuse_count?: number | null;
    rtls_attempts?: number | null;
    rtls_landings?: number | null;
    status?: string | null;
    water_landing?: boolean | null;
}

  
  export interface IHistoryFind {
    end?: any | null;
    flight_number?: number | null;
    id?: string | null;
    start?: any | null;
}

  
  export interface IHistory {
    __typename?: "History";
    details?: string | null;
    event_date_unix?: any | null;
    event_date_utc?: any | null;
    id?: string | null;
    links?: ILink | null;
    title?: string | null;
    flight?: ILaunch | null;
}

  
  export interface ILink {
    __typename?: "Link";
    article?: string | null;
    reddit?: string | null;
    wikipedia?: string | null;
}

  
  export interface ILaunch {
    __typename?: "Launch";
    details?: string | null;
    id?: string | null;
    is_tentative?: boolean | null;
    launch_date_local?: any | null;
    launch_date_unix?: any | null;
    launch_date_utc?: any | null;
    launch_site?: ILaunchSite | null;
    launch_success?: boolean | null;
    launch_year?: string | null;
    links?: ILaunchLinks | null;
    mission_id?: Array<string> | null;
    mission_name?: string | null;
    rocket?: ILaunchRocket | null;
    static_fire_date_unix?: any | null;
    static_fire_date_utc?: any | null;
    telemetry?: ILaunchTelemetry | null;
    tentative_max_precision?: string | null;
    upcoming?: boolean | null;
    ships?: Array<IShip> | null;
}

  
  export interface ILaunchSite {
    __typename?: "LaunchSite";
    site_id?: string | null;
    site_name_long?: string | null;
    site_name?: string | null;
}

  
  export interface ILaunchLinks {
    __typename?: "LaunchLinks";
    article_link?: string | null;
    flickr_images?: Array<string> | null;
    mission_patch_small?: string | null;
    mission_patch?: string | null;
    presskit?: string | null;
    reddit_campaign?: string | null;
    reddit_launch?: string | null;
    reddit_media?: string | null;
    reddit_recovery?: string | null;
    video_link?: string | null;
    wikipedia?: string | null;
}

  
  export interface ILaunchRocket {
    __typename?: "LaunchRocket";
    fairings?: ILaunchRocketFairings | null;
    first_stage?: ILaunchRocketFirstStage | null;
    rocket_name?: string | null;
    rocket_type?: string | null;
    rocket?: IRocket | null;
    second_stage?: ILaunchRocketSecondStage | null;
}

  
  export interface ILaunchRocketFairings {
    __typename?: "LaunchRocketFairings";
    recovered?: boolean | null;
    recovery_attempt?: boolean | null;
    reused?: boolean | null;
    ship?: string | null;
}

  
  export interface ILaunchRocketFirstStage {
    __typename?: "LaunchRocketFirstStage";
    cores?: Array<ILaunchRocketFirstStageCore> | null;
}

  
  export interface ILaunchRocketFirstStageCore {
    __typename?: "LaunchRocketFirstStageCore";
    block?: number | null;
    core?: ICore | null;
    flight?: number | null;
    gridfins?: boolean | null;
    land_success?: boolean | null;
    landing_intent?: boolean | null;
    landing_type?: string | null;
    landing_vehicle?: string | null;
    legs?: boolean | null;
    reused?: boolean | null;
}

  
  export interface IRocket {
    __typename?: "Rocket";
    active?: boolean | null;
    boosters?: number | null;
    company?: string | null;
    cost_per_launch?: number | null;
    country?: string | null;
    description?: string | null;
    diameter?: IDistance | null;
    engines?: IRocketEngines | null;
    first_flight?: any | null;
    first_stage?: IRocketFirstStage | null;
    height?: IDistance | null;
    id?: string | null;
    landing_legs?: IRocketLandingLegs | null;
    mass?: IMass | null;
    name?: string | null;
    payload_weights?: Array<IRocketPayloadWeight> | null;
    second_stage?: IRocketSecondStage | null;
    stages?: number | null;
    success_rate_pct?: number | null;
    type?: string | null;
    wikipedia?: string | null;
}

  
  export interface IRocketEngines {
    __typename?: "RocketEngines";
    number?: number | null;
    type?: string | null;
    version?: string | null;
    layout?: string | null;
    engine_loss_max?: string | null;
    propellant_1?: string | null;
    propellant_2?: string | null;
    thrust_sea_level?: IForce | null;
    thrust_vacuum?: IForce | null;
    thrust_to_weight?: number | null;
}

  
  export interface IRocketFirstStage {
    __typename?: "RocketFirstStage";
    burn_time_sec?: number | null;
    engines?: number | null;
    fuel_amount_tons?: number | null;
    reusable?: boolean | null;
    thrust_sea_level?: IForce | null;
    thrust_vacuum?: IForce | null;
}

  
  export interface IRocketLandingLegs {
    __typename?: "RocketLandingLegs";
    number?: number | null;
    material?: string | null;
}

  
  export interface IRocketPayloadWeight {
    __typename?: "RocketPayloadWeight";
    id?: string | null;
    kg?: number | null;
    lb?: number | null;
    name?: string | null;
}

  
  export interface IRocketSecondStage {
    __typename?: "RocketSecondStage";
    burn_time_sec?: number | null;
    engines?: number | null;
    fuel_amount_tons?: number | null;
    payloads?: IRocketSecondStagePayloads | null;
    thrust?: IForce | null;
}

  
  export interface IRocketSecondStagePayloads {
    __typename?: "RocketSecondStagePayloads";
    option_1?: string | null;
    composite_fairing?: IRocketSecondStagePayloadCompositeFairing | null;
}

  
  export interface IRocketSecondStagePayloadCompositeFairing {
    __typename?: "RocketSecondStagePayloadCompositeFairing";
    height?: IDistance | null;
    diameter?: IDistance | null;
}

  
  export interface ILaunchRocketSecondStage {
    __typename?: "LaunchRocketSecondStage";
    block?: number | null;
    payloads?: Array<IPayload> | null;
}

  
  export interface IPayload {
    __typename?: "Payload";
    customers?: Array<string> | null;
    id?: string | null;
    manufacturer?: string | null;
    nationality?: string | null;
    norad_id?: Array<number> | null;
    orbit_params?: IPayloadOrbitParams | null;
    orbit?: string | null;
    payload_mass_kg?: number | null;
    payload_mass_lbs?: number | null;
    payload_type?: string | null;
    reused?: boolean | null;
}

  
  export interface IPayloadOrbitParams {
    __typename?: "PayloadOrbitParams";
    apoapsis_km?: number | null;
    arg_of_pericenter?: number | null;
    eccentricity?: number | null;
    epoch?: any | null;
    inclination_deg?: number | null;
    lifespan_years?: number | null;
    longitude?: number | null;
    mean_anomaly?: number | null;
    mean_motion?: number | null;
    periapsis_km?: number | null;
    period_min?: number | null;
    raan?: number | null;
    reference_system?: string | null;
    regime?: string | null;
    semi_major_axis_km?: number | null;
}

  
  export interface ILaunchTelemetry {
    __typename?: "LaunchTelemetry";
    flight_club?: string | null;
}

  
  export interface IShip {
    __typename?: "Ship";
    abs?: number | null;
    active?: boolean | null;
    attempted_landings?: number | null;
    class?: number | null;
    course_deg?: number | null;
    home_port?: string | null;
    id?: string | null;
    image?: string | null;
    imo?: number | null;
    missions?: Array<IShipMission> | null;
    mmsi?: number | null;
    model?: string | null;
    name?: string | null;
    position?: IShipLocation | null;
    roles?: Array<string> | null;
    speed_kn?: number | null;
    status?: string | null;
    successful_landings?: number | null;
    type?: string | null;
    url?: string | null;
    weight_kg?: number | null;
    weight_lbs?: number | null;
    year_built?: number | null;
}

  
  export interface IShipMission {
    __typename?: "ShipMission";
    flight?: string | null;
    name?: string | null;
}

  
  export interface IShipLocation {
    __typename?: "ShipLocation";
    latitude?: number | null;
    longitude?: number | null;
}

  
  export interface IHistoriesResult {
    __typename?: "HistoriesResult";
    result?: IResult | null;
    data?: Array<IHistory> | null;
}

  
  export interface IResult {
    __typename?: "Result";
    totalCount?: number | null;
}

  
  export interface ILandpad {
    __typename?: "Landpad";
    attempted_landings?: string | null;
    details?: string | null;
    full_name?: string | null;
    id?: string | null;
    landing_type?: string | null;
    location?: ILocation | null;
    status?: string | null;
    successful_landings?: string | null;
    wikipedia?: string | null;
}

  
  export interface ILocation {
    __typename?: "Location";
    latitude?: number | null;
    longitude?: number | null;
    name?: string | null;
    region?: string | null;
}

  
  export interface ILaunchFind {
    apoapsis_km?: number | null;
    block?: number | null;
    cap_serial?: string | null;
    capsule_reuse?: string | null;
    core_flight?: number | null;
    core_reuse?: string | null;
    core_serial?: string | null;
    customer?: string | null;
    eccentricity?: number | null;
    end?: any | null;
    epoch?: any | null;
    fairings_recovered?: string | null;
    fairings_recovery_attempt?: string | null;
    fairings_reuse?: string | null;
    fairings_reused?: string | null;
    fairings_ship?: string | null;
    gridfins?: string | null;
    id?: string | null;
    inclination_deg?: number | null;
    land_success?: string | null;
    landing_intent?: string | null;
    landing_type?: string | null;
    landing_vehicle?: string | null;
    launch_date_local?: any | null;
    launch_date_utc?: any | null;
    launch_success?: string | null;
    launch_year?: string | null;
    legs?: string | null;
    lifespan_years?: number | null;
    longitude?: number | null;
    manufacturer?: string | null;
    mean_motion?: number | null;
    mission_id?: string | null;
    mission_name?: string | null;
    nationality?: string | null;
    norad_id?: number | null;
    orbit?: string | null;
    payload_id?: string | null;
    payload_type?: string | null;
    periapsis_km?: number | null;
    period_min?: number | null;
    raan?: number | null;
    reference_system?: string | null;
    regime?: string | null;
    reused?: string | null;
    rocket_id?: string | null;
    rocket_name?: string | null;
    rocket_type?: string | null;
    second_stage_block?: string | null;
    semi_major_axis_km?: number | null;
    ship?: string | null;
    side_core1_reuse?: string | null;
    side_core2_reuse?: string | null;
    site_id?: string | null;
    site_name_long?: string | null;
    site_name?: string | null;
    start?: any | null;
    tbd?: string | null;
    tentative_max_precision?: string | null;
    tentative?: string | null;
}

  
  export interface ILaunchesPastResult {
    __typename?: "LaunchesPastResult";
    result?: IResult | null;
    data?: Array<ILaunch> | null;
}

  
  export interface ILaunchpad {
    __typename?: "Launchpad";
    attempted_launches?: number | null;
    details?: string | null;
    id?: string | null;
    location?: ILocation | null;
    name?: string | null;
    status?: string | null;
    successful_launches?: number | null;
    vehicles_launched?: Array<IRocket> | null;
    wikipedia?: string | null;
}

  
  export interface IMissionsFind {
    id?: string | null;
    manufacturer?: string | null;
    name?: string | null;
    payload_id?: string | null;
}

  
  export interface IMission {
    __typename?: "Mission";
    description?: string | null;
    id?: string | null;
    manufacturers?: Array<string> | null;
    name?: string | null;
    twitter?: string | null;
    website?: string | null;
    wikipedia?: string | null;
    payloads?: Array<IPayload> | null;
}

  
  export interface IMissionResult {
    __typename?: "MissionResult";
    result?: IResult | null;
    data?: Array<IMission> | null;
}

  
  export interface IPayloadsFind {
    apoapsis_km?: number | null;
    customer?: string | null;
    eccentricity?: number | null;
    epoch?: any | null;
    inclination_deg?: number | null;
    lifespan_years?: number | null;
    longitude?: number | null;
    manufacturer?: string | null;
    mean_motion?: number | null;
    nationality?: string | null;
    norad_id?: number | null;
    orbit?: string | null;
    payload_id?: string | null;
    payload_type?: string | null;
    periapsis_km?: number | null;
    period_min?: number | null;
    raan?: number | null;
    reference_system?: string | null;
    regime?: string | null;
    reused?: boolean | null;
    semi_major_axis_km?: number | null;
}

  
  export interface IRoadster {
    __typename?: "Roadster";
    apoapsis_au?: number | null;
    details?: string | null;
    earth_distance_km?: number | null;
    earth_distance_mi?: number | null;
    eccentricity?: number | null;
    epoch_jd?: number | null;
    inclination?: number | null;
    launch_date_unix?: any | null;
    launch_date_utc?: any | null;
    launch_mass_kg?: number | null;
    launch_mass_lbs?: number | null;
    longitude?: number | null;
    mars_distance_km?: number | null;
    mars_distance_mi?: number | null;
    name?: string | null;
    norad_id?: number | null;
    orbit_type?: number | null;
    periapsis_arg?: number | null;
    periapsis_au?: number | null;
    period_days?: number | null;
    semi_major_axis_au?: number | null;
    speed_kph?: number | null;
    speed_mph?: number | null;
    wikipedia?: string | null;
}

  
  export interface IRocketsResult {
    __typename?: "RocketsResult";
    result?: IResult | null;
    data?: Array<IRocket> | null;
}

  
  export interface IShipsFind {
    id?: string | null;
    name?: string | null;
    model?: string | null;
    type?: string | null;
    role?: string | null;
    active?: boolean | null;
    imo?: number | null;
    mmsi?: number | null;
    abs?: number | null;
    class?: number | null;
    weight_lbs?: number | null;
    weight_kg?: number | null;
    year_built?: number | null;
    home_port?: string | null;
    status?: string | null;
    speed_kn?: number | null;
    course_deg?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    successful_landings?: number | null;
    attempted_landings?: number | null;
    mission?: string | null;
}

  
  export interface IShipsResult {
    __typename?: "ShipsResult";
    result?: IResult | null;
    data?: Array<IShip> | null;
}

  
  export interface IMutation {
    __typename?: "Mutation";
    /**
    description?: delete data from the table?: "users"
  */
    delete_users?: IUsersMutationResponse | null;
    /**
    description?: insert data into the table?: "users"
  */
    insert_users?: IUsersMutationResponse | null;
    /**
    description?: update data of the table?: "users"
  */
    update_users?: IUsersMutationResponse | null;
}

  /**
    description?: response of any mutation on the table "users"
  */
  export interface IUsersMutationResponse {
    __typename?: "users_mutation_response";
    /**
    description?: number of affected rows by the mutation
  */
    affected_rows?: number;
    /**
    description?: data of the affected rows by the mutation
  */
    returning?: Array<IUsers>;
}

  /**
    description: input type for inserting data into table "users"
  */
  export interface IUsersInsertInput {
    id?: any | null;
    name?: string | null;
    rocket?: string | null;
    timestamp?: any | null;
    twitter?: string | null;
}

  /**
    description?: on conflict condition type for table "users"
  */
  export interface IUsersOnConflict {
    constraint?: IUsersConstraintEnum;
    update_columns?: Array<IUsersUpdateColumnEnum>;
}

export   /**
    description?: unique or primary key constraints on table "users"
  */
  type IUsersConstraintEnum = 'users_pkey';

export   /**
    description?: update columns of table "users"
  */
  type IUsersUpdateColumnEnum = 'id' | 'name' | 'rocket' | 'timestamp' | 'twitter';

  /**
    description: input type for updating data in table "users"
  */
  export interface IUsersSetInput {
    id?: any | null;
    name?: string | null;
    rocket?: string | null;
    timestamp?: any | null;
    twitter?: string | null;
}

  
  export interface ISubscription {
    __typename?: "Subscription";
    /**
    description?: fetch data from the table?: "users"
  */
    users?: Array<IUsers>;
    /**
    description?: fetch aggregated fields from the table?: "users"
  */
    users_aggregate?: IUsersAggregate;
    /**
    description?: fetch data from the table?: "users" using primary key columns
  */
    users_by_pk?: IUsers | null;
}

export   /**
    description?: conflict action
  */
  type IConflictActionEnum = 'ignore' | 'update';

  /**
    description: order by aggregate values of table "users"
  */
  export interface IUsersAggregateOrderBy {
    count?: IOrderByEnum | null;
    max?: IUsersMaxOrderBy | null;
    min?: IUsersMinOrderBy | null;
}

  /**
    description: order by max() on columns of table "users"
  */
  export interface IUsersMaxOrderBy {
    name?: IOrderByEnum | null;
    rocket?: IOrderByEnum | null;
    timestamp?: IOrderByEnum | null;
    twitter?: IOrderByEnum | null;
}

  /**
    description: order by min() on columns of table "users"
  */
  export interface IUsersMinOrderBy {
    name?: IOrderByEnum | null;
    rocket?: IOrderByEnum | null;
    timestamp?: IOrderByEnum | null;
    twitter?: IOrderByEnum | null;
}

  /**
    description: input type for inserting array relation for remote table "users"
  */
  export interface IUsersArrRelInsertInput {
    data: Array<IUsersInsertInput>;
    on_conflict?: IUsersOnConflict | null;
}

  /**
    description: input type for inserting object relation for remote table "users"
  */
  export interface IUsersObjRelInsertInput {
    data: IUsersInsertInput;
    on_conflict?: IUsersOnConflict | null;
}

  
  export interface ICoreMission {
    __typename?: "CoreMission";
    name?: string | null;
    flight?: number | null;
}


// tslint:enable
