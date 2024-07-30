export type Review = {
  title: string
  rating: number
  body: string
  key: `${number}`
}

export type DrawerParamList = {
  Home: undefined
  About: undefined
}

export type RootStackParamList = {
  Drawer: undefined
  ReviewDetails: Review
}
