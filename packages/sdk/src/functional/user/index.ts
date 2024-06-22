/**
 * @packageDocumentation
 * @module api.functional.user
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type {
  IConnection,
  IPropagation,
  Resolved,
  HttpError,
} from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

/**
 * @controller UserController.create
 * @path POST /user
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  data: create.Input,
): Promise<create.Output> {
  typia.assert<typeof data>(data);
  return !!connection.simulate
    ? create.simulate(connection, data)
    : PlainFetcher.propagate(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...create.METADATA,
          template: create.METADATA.path,
          path: create.path(),
        },
        data,
      );
}
export namespace create {
  export type Input = {
    email: string;
    password: string;
    id?: undefined | string;
    firstName?: null | undefined | string;
    middleName?: null | undefined | string;
    lastName?: null | undefined | string;
  };
  export type Output = IPropagation<{
    201: string;
  }>;

  export const METADATA = {
    method: "POST",
    path: "/user",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/user";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<string> => typia.random<string>(g);
  export const simulate = (
    connection: IConnection,
    data: create.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    try {
      assert.body(() => typia.assert(data));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return {
      success: true,
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
      data: random(
        "object" === typeof connection.simulate && null !== connection.simulate
          ? connection.simulate
          : undefined,
      ),
    };
  };
}
