export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "followings" */
export type Followings = {
  __typename?: 'followings';
  from_user_id: Scalars['bigint'];
  to_user_id: Scalars['bigint'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByToUserId: Users;
};

/** aggregated selection of "followings" */
export type Followings_Aggregate = {
  __typename?: 'followings_aggregate';
  aggregate?: Maybe<Followings_Aggregate_Fields>;
  nodes: Array<Followings>;
};

/** aggregate fields of "followings" */
export type Followings_Aggregate_Fields = {
  __typename?: 'followings_aggregate_fields';
  avg?: Maybe<Followings_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Followings_Max_Fields>;
  min?: Maybe<Followings_Min_Fields>;
  stddev?: Maybe<Followings_Stddev_Fields>;
  stddev_pop?: Maybe<Followings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Followings_Stddev_Samp_Fields>;
  sum?: Maybe<Followings_Sum_Fields>;
  var_pop?: Maybe<Followings_Var_Pop_Fields>;
  var_samp?: Maybe<Followings_Var_Samp_Fields>;
  variance?: Maybe<Followings_Variance_Fields>;
};


/** aggregate fields of "followings" */
export type Followings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Followings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "followings" */
export type Followings_Aggregate_Order_By = {
  avg?: Maybe<Followings_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Followings_Max_Order_By>;
  min?: Maybe<Followings_Min_Order_By>;
  stddev?: Maybe<Followings_Stddev_Order_By>;
  stddev_pop?: Maybe<Followings_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Followings_Stddev_Samp_Order_By>;
  sum?: Maybe<Followings_Sum_Order_By>;
  var_pop?: Maybe<Followings_Var_Pop_Order_By>;
  var_samp?: Maybe<Followings_Var_Samp_Order_By>;
  variance?: Maybe<Followings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "followings" */
export type Followings_Arr_Rel_Insert_Input = {
  data: Array<Followings_Insert_Input>;
  on_conflict?: Maybe<Followings_On_Conflict>;
};

/** aggregate avg on columns */
export type Followings_Avg_Fields = {
  __typename?: 'followings_avg_fields';
  from_user_id?: Maybe<Scalars['Float']>;
  to_user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "followings" */
export type Followings_Avg_Order_By = {
  from_user_id?: Maybe<Order_By>;
  to_user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "followings". All fields are combined with a logical 'AND'. */
export type Followings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Followings_Bool_Exp>>>;
  _not?: Maybe<Followings_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Followings_Bool_Exp>>>;
  from_user_id?: Maybe<Bigint_Comparison_Exp>;
  to_user_id?: Maybe<Bigint_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userByToUserId?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "followings" */
export enum Followings_Constraint {
  /** unique or primary key constraint */
  FollowingsPkey = 'followings_pkey'
}

/** input type for incrementing integer column in table "followings" */
export type Followings_Inc_Input = {
  from_user_id?: Maybe<Scalars['bigint']>;
  to_user_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "followings" */
export type Followings_Insert_Input = {
  from_user_id?: Maybe<Scalars['bigint']>;
  to_user_id?: Maybe<Scalars['bigint']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userByToUserId?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Followings_Max_Fields = {
  __typename?: 'followings_max_fields';
  from_user_id?: Maybe<Scalars['bigint']>;
  to_user_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "followings" */
export type Followings_Max_Order_By = {
  from_user_id?: Maybe<Order_By>;
  to_user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Followings_Min_Fields = {
  __typename?: 'followings_min_fields';
  from_user_id?: Maybe<Scalars['bigint']>;
  to_user_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "followings" */
export type Followings_Min_Order_By = {
  from_user_id?: Maybe<Order_By>;
  to_user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "followings" */
export type Followings_Mutation_Response = {
  __typename?: 'followings_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Followings>;
};

/** input type for inserting object relation for remote table "followings" */
export type Followings_Obj_Rel_Insert_Input = {
  data: Followings_Insert_Input;
  on_conflict?: Maybe<Followings_On_Conflict>;
};

/** on conflict condition type for table "followings" */
export type Followings_On_Conflict = {
  constraint: Followings_Constraint;
  update_columns: Array<Followings_Update_Column>;
  where?: Maybe<Followings_Bool_Exp>;
};

/** ordering options when selecting data from "followings" */
export type Followings_Order_By = {
  from_user_id?: Maybe<Order_By>;
  to_user_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userByToUserId?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "followings" */
export type Followings_Pk_Columns_Input = {
  from_user_id: Scalars['bigint'];
  to_user_id: Scalars['bigint'];
};

/** select columns of table "followings" */
export enum Followings_Select_Column {
  /** column name */
  FromUserId = 'from_user_id',
  /** column name */
  ToUserId = 'to_user_id'
}

/** input type for updating data in table "followings" */
export type Followings_Set_Input = {
  from_user_id?: Maybe<Scalars['bigint']>;
  to_user_id?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Followings_Stddev_Fields = {
  __typename?: 'followings_stddev_fields';
  from_user_id?: Maybe<Scalars['Float']>;
  to_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "followings" */
export type Followings_Stddev_Order_By = {
  from_user_id?: Maybe<Order_By>;
  to_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Followings_Stddev_Pop_Fields = {
  __typename?: 'followings_stddev_pop_fields';
  from_user_id?: Maybe<Scalars['Float']>;
  to_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "followings" */
export type Followings_Stddev_Pop_Order_By = {
  from_user_id?: Maybe<Order_By>;
  to_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Followings_Stddev_Samp_Fields = {
  __typename?: 'followings_stddev_samp_fields';
  from_user_id?: Maybe<Scalars['Float']>;
  to_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "followings" */
export type Followings_Stddev_Samp_Order_By = {
  from_user_id?: Maybe<Order_By>;
  to_user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Followings_Sum_Fields = {
  __typename?: 'followings_sum_fields';
  from_user_id?: Maybe<Scalars['bigint']>;
  to_user_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "followings" */
export type Followings_Sum_Order_By = {
  from_user_id?: Maybe<Order_By>;
  to_user_id?: Maybe<Order_By>;
};

/** update columns of table "followings" */
export enum Followings_Update_Column {
  /** column name */
  FromUserId = 'from_user_id',
  /** column name */
  ToUserId = 'to_user_id'
}

/** aggregate var_pop on columns */
export type Followings_Var_Pop_Fields = {
  __typename?: 'followings_var_pop_fields';
  from_user_id?: Maybe<Scalars['Float']>;
  to_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "followings" */
export type Followings_Var_Pop_Order_By = {
  from_user_id?: Maybe<Order_By>;
  to_user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Followings_Var_Samp_Fields = {
  __typename?: 'followings_var_samp_fields';
  from_user_id?: Maybe<Scalars['Float']>;
  to_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "followings" */
export type Followings_Var_Samp_Order_By = {
  from_user_id?: Maybe<Order_By>;
  to_user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Followings_Variance_Fields = {
  __typename?: 'followings_variance_fields';
  from_user_id?: Maybe<Scalars['Float']>;
  to_user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "followings" */
export type Followings_Variance_Order_By = {
  from_user_id?: Maybe<Order_By>;
  to_user_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "followings" */
  delete_followings?: Maybe<Followings_Mutation_Response>;
  /** delete single row from the table: "followings" */
  delete_followings_by_pk?: Maybe<Followings>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "followings" */
  insert_followings?: Maybe<Followings_Mutation_Response>;
  /** insert a single row into the table: "followings" */
  insert_followings_one?: Maybe<Followings>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "followings" */
  update_followings?: Maybe<Followings_Mutation_Response>;
  /** update single row of the table: "followings" */
  update_followings_by_pk?: Maybe<Followings>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_FollowingsArgs = {
  where: Followings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Followings_By_PkArgs = {
  from_user_id: Scalars['bigint'];
  to_user_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_FollowingsArgs = {
  objects: Array<Followings_Insert_Input>;
  on_conflict?: Maybe<Followings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Followings_OneArgs = {
  object: Followings_Insert_Input;
  on_conflict?: Maybe<Followings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_FollowingsArgs = {
  _inc?: Maybe<Followings_Inc_Input>;
  _set?: Maybe<Followings_Set_Input>;
  where: Followings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Followings_By_PkArgs = {
  _inc?: Maybe<Followings_Inc_Input>;
  _set?: Maybe<Followings_Set_Input>;
  pk_columns: Followings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * 投稿
 *
 *
 * columns and relationships of "posts"
 */
export type Posts = {
  __typename?: 'posts';
  body: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  title: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<Posts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: Maybe<Posts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Posts_Max_Order_By>;
  min?: Maybe<Posts_Min_Order_By>;
  stddev?: Maybe<Posts_Stddev_Order_By>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Order_By>;
  sum?: Maybe<Posts_Sum_Order_By>;
  var_pop?: Maybe<Posts_Var_Pop_Order_By>;
  var_samp?: Maybe<Posts_Var_Samp_Order_By>;
  variance?: Maybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  _not?: Maybe<Posts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  body?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey'
}

/** input type for incrementing integer column in table "posts" */
export type Posts_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns: Array<Posts_Update_Column>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** ordering options when selecting data from "posts" */
export type Posts_Order_By = {
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "posts" */
export type Posts_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "followings" */
  followings: Array<Followings>;
  /** fetch aggregated fields from the table: "followings" */
  followings_aggregate: Followings_Aggregate;
  /** fetch data from the table: "followings" using primary key columns */
  followings_by_pk?: Maybe<Followings>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootFollowingsArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** query root */
export type Query_RootFollowings_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** query root */
export type Query_RootFollowings_By_PkArgs = {
  from_user_id: Scalars['bigint'];
  to_user_id: Scalars['bigint'];
};


/** query root */
export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** query root */
export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** query root */
export type Query_RootPosts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "followings" */
  followings: Array<Followings>;
  /** fetch aggregated fields from the table: "followings" */
  followings_aggregate: Followings_Aggregate;
  /** fetch data from the table: "followings" using primary key columns */
  followings_by_pk?: Maybe<Followings>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootFollowingsArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowings_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowings_By_PkArgs = {
  from_user_id: Scalars['bigint'];
  to_user_id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  birthday: Scalars['date'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  followers: Array<Followings>;
  /** An aggregated array relationship */
  followers_aggregate: Followings_Aggregate;
  /** An array relationship */
  followings: Array<Followings>;
  /** An array relationship */
  followingsByToUserId: Array<Followings>;
  /** An aggregated array relationship */
  followingsByToUserId_aggregate: Followings_Aggregate;
  /** An aggregated array relationship */
  followings_aggregate: Followings_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregated array relationship */
  posts_aggregate: Posts_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersFollowersArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowers_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowingsArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowingsByToUserIdArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowingsByToUserId_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowings_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  birthday?: Maybe<Date_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  followers?: Maybe<Followings_Bool_Exp>;
  followings?: Maybe<Followings_Bool_Exp>;
  followingsByToUserId?: Maybe<Followings_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  posts?: Maybe<Posts_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  followers?: Maybe<Followings_Arr_Rel_Insert_Input>;
  followings?: Maybe<Followings_Arr_Rel_Insert_Input>;
  followingsByToUserId?: Maybe<Followings_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  birthday?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  birthday?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  birthday?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  followers_aggregate?: Maybe<Followings_Aggregate_Order_By>;
  followingsByToUserId_aggregate?: Maybe<Followings_Aggregate_Order_By>;
  followings_aggregate?: Maybe<Followings_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  birthday?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
};
